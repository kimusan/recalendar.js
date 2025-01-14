import { Page, View, StyleSheet } from '@react-pdf/renderer';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import React from 'react';
import { withTranslation } from 'react-i18next';

import { getWeekNumber } from 'lib/date';
import Header from 'pdf/components/header';
import Itinerary from 'pdf/components/itinerary';
import MiniCalendar, { HIGHLIGHT_WEEK } from 'pdf/components/mini-calendar';
import PdfConfig from 'pdf/config';
import { weekRetrospectiveLink } from 'pdf/lib/links';
import { content, page } from 'pdf/styles';
import { getItemsOnExtraPages } from 'pdf/utils';

class WeekRetrospectivePage extends React.Component {
	styles = StyleSheet.create( Object.assign( {}, { content, page } ) );

	getNameOfWeek() {
		const { date } = this.props;
		const beginningOfWeek = date.startOf( 'week' ).format( 'DD MMMM' );
		const endOfWeek = date.endOf( 'week' ).format( 'DD MMMM' );
		return `${beginningOfWeek} - ${endOfWeek}`;
	}

	render() {
		const { t, date, config } = this.props;
		return (
			<>
				<Page id={ weekRetrospectiveLink( date ) } size={ config.pageSize }>
					<View style={ this.styles.page }>
						<Header
							isLeftHanded={ config.isLeftHanded }
							title={ t( 'page.retrospective.title' ) }
							subtitle={ this.getNameOfWeek() }
							number={ getWeekNumber( date ).toString() }
							previousLink={
								'#' + weekRetrospectiveLink( date.subtract( 1, 'week' ) )
							}
							nextLink={ '#' + weekRetrospectiveLink( date.add( 1, 'week' ) ) }
							calendar={
								<MiniCalendar
									date={ date }
									highlightMode={ HIGHLIGHT_WEEK }
									config={ config }
								/>
							}
						/>
						<View style={ this.styles.content }>
							<Itinerary items={ config.weekRetrospectiveItinerary } />
						</View>
					</View>
				</Page>
				{getItemsOnExtraPages( config.weekRetrospectiveItinerary ).map(
					( items, index ) => (
						<Page key={ index } size={ config.pageSize }>
							<View style={ this.styles.page }>
								<Itinerary items={ items } />
							</View>
						</Page>
					),
				)}
			</>
		);
	}
}

WeekRetrospectivePage.propTypes = {
	config: PropTypes.instanceOf( PdfConfig ).isRequired,
	date: PropTypes.instanceOf( dayjs ).isRequired,
	t: PropTypes.func.isRequired,
};

export default withTranslation( 'pdf' )( WeekRetrospectivePage );

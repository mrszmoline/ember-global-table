import Ember from 'ember';
import layout from '../templates/components/g-table';
import {
  computed
} from '@ember/object';
import {
  set
} from '@ember/object';

export default Ember.Component.extend({
  layout,
  dir: 'asc',
  columns: null,
  sort: null,
  sortProperties: computed('sort', 'dir', function() {
    return [this.get('sort') + ':' + this.get('dir')]
  }),
  sortedData: computed.sort('data', 'sortProperties'),
  isCustom: false,
  isDesktop: computed('media.{isMobile,isDesktop,isTablet}', function() {
    if (this.get('media.isMobile') == true || this.get('media.isTablet') == true) {
      return false
    } else {
      return true
    }
  }),
  columnsLength: computed(function() {
    if (this.get('columns')) {

      return this.get('columns').length
    }
  }),
  calculatedWidth: computed(function() {
    let columns = this.get('columns');
    let counter = 0;
    let totalStartingWidths = 100;
    if (columns) {
      columns.forEach((column) => {
        if (!column.width) {
          counter++

        } else {
          totalStartingWidths = totalStartingWidths - +column.width.replace('%', '')
        }
      })
    }
    let totalSpace = totalStartingWidths
    let numberOfColumns = counter
    return Math.round((+totalSpace / +numberOfColumns)) + '%'
  }),
  actions: {
    moreDetails(data) {
      if (data.isOpenRow) {
        set(data, 'isOpenRow', false);
      } else {
        set(data, 'isOpenRow', true);
      }

    },
    onColumnClick(column) {
      this.set('sort', column);
      if (this.get('dir') == 'asc') {
        this.set('dir', 'desc')
      } else {
        this.set('dir', 'asc')
      }
    }
  }

});

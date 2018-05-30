import Controller from '@ember/controller';
import {
  set
} from '@ember/object';

export default Controller.extend({

  init() {
    function randomDate(start, end) {
      return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }

    let counter = 0
    let scrollableArray = []
    while (counter < 100) {
      let scrollableObject = {
        id: counter,
        value: Math.floor(Math.random() * 101),
        date: randomDate(new Date(2012, 0, 1), new Date())
      }
      // scrollableArray.pushObject(scrollableObject);
      counter++
    }
    this.scrollableData = scrollableArray;
    this._super(...arguments);
    this.simpleData = [{
      id: 1,
      date: '05/04/2018',
      name: 'Les',
      amount: 0.00
    }, {
      id: 2,
      date: '05/08/2018',
      name: 'Sven',
      amount: 8.00
    }, {
      id: 3,
      date: '05/01/2018',
      name: 'Lena',
      amount: 78.00
    }, {
      id: 4,
      date: '05/15/2018',
      name: 'Ole',
      amount: 77.00
    }, {
      id: 5,
      date: '05/04/2018',
      name: 'Hans',
      amount: 20.00
    }];

    this.complexData = [{
        category: 'Fast Food',
        years: [{
            year: 2018,
            totalSpent: 2611,
            locations: [{
                location: 'McDonalds',
                totalSpent: 2555,
                values: [{
                    value: 851.67,
                    date: randomDate(new Date(2012, 0, 1), new Date())
                  },
                  {
                    value: 851.67,
                    date: randomDate(new Date(2012, 0, 1), new Date())
                  },
                  {
                    value: 851.67,
                    date: randomDate(new Date(2012, 0, 1), new Date())
                  }
                ]
              },
              {
                location: "Culver's",
                totalSpent: 56,
                values: [{
                    value: 18.67,
                    date: randomDate(new Date(2012, 0, 1), new Date())
                  },
                  {
                    value: 18.67,
                    date: randomDate(new Date(2012, 0, 1), new Date())
                  },
                  {
                    value: 18.67,
                    date: randomDate(new Date(2012, 0, 1), new Date())
                  }
                ]
              }
            ],
          },
          {
            year: 2017,
            locations: [{
                location: 'McDonalds',
                totalSpent: 150,
                values: [{
                    value: 100,
                    date: randomDate(new Date(2012, 0, 1), new Date())
                  },
                  {
                    value: 25,
                    date: randomDate(new Date(2012, 0, 1), new Date())
                  },
                  {
                    value: 25,
                    date: randomDate(new Date(2012, 0, 1), new Date())
                  }
                ]
              },
              {
                location: "Culver's",
                totalSpent: 400,
                values: [{
                    value: 98,
                    date: randomDate(new Date(2012, 0, 1), new Date())
                  },
                  {
                    value: 151,
                    date: randomDate(new Date(2012, 0, 1), new Date())
                  },
                  {
                    value: 151,
                    date: randomDate(new Date(2012, 0, 1), new Date())
                  }
                ]
              },
              {
                location: "Taco John's",
                totalSpent: 789,
                values: [{
                    value: 394.5,
                    date: randomDate(new Date(2012, 0, 1), new Date())
                  },
                  {
                    value: 394.5,
                    date: randomDate(new Date(2012, 0, 1), new Date())
                  }
                ]
              }
            ],
          }
        ],
      },
      {
        category: 'Entertainment',
        years: [{
            year: 2018,
            locations: [{
                location: 'Movies'
              },
              {
                location: "Concerts"
              }
            ],
          },
          {
            year: 2017,
            locations: [{
                location: 'Movies'
              },
              {
                location: "Concerts"
              },
              {
                location: "Camping"
              }
            ],
          }
        ],
        date: '05/08/2018',
        name: 'Sven',
        amount: 8.00
      },
      {
        category: 'Clothing',
        years: [{
            year: 2018,
            locations: [{
                location: 'Target'
              },
              {
                location: "Stitch Fix"
              }
            ],
          },
          {
            year: 2017,
            locations: [{
                location: 'Target'
              },
              {
                location: "American Eagle"
              },
              {
                location: "JcPenny"
              }
            ],
          }
        ],
        date: '05/01/2018',
        name: 'Lena',
        amount: 78.00
      }, {
        category: 'Groceries',
        years: [{
            year: 2018,
            locations: [{
                location: 'Hornbachers'
              },
              {
                location: "Hugo's"
              }
            ],
          },
          {
            year: 2017,
            locations: [{
                location: 'Target'
              },
              {
                location: "Sam's Club"
              },
              {
                location: "Walmart"
              }
            ],
          }
        ],
        date: '05/15/2018',
        name: 'Ole',
        amount: 77.00
      },
      {
        category: 'Entertainment',
      },
      {
        category: 'Entertainment',
      }, {
        category: 'Entertainment',
      }, {
        category: 'Entertainment',
      }, {
        category: 'Entertainment',
      }, {
        category: 'Entertainment',
      }, {
        category: 'Entertainment',
      }, {
        category: 'Entertainment',
      }, {
        category: 'Entertainment',
      }, {
        category: 'Entertainment',
      }, {
        category: 'Entertainment',
      }, {
        category: 'Entertainment',
      }, {
        category: 'Entertainment',
      }, {
        category: 'Entertainment',
      }, {
        category: 'Entertainment',
      }, {
        category: 'Entertainment',
      }, {
        category: 'Entertainment',
      }
    ];

    // Columns
    this.columns = [{
        title: 'Date',
        propertyName: 'date',
        display: 'All'
      },
      {
        propertyName: 'name',
        title: 'Customer',
        display: 'All',
      },
      {
        propertyName: 'amount',
        title: 'Amount',
        display: 'All'
      }
    ];
    this.columnsExpandable = [{
        title: '&nbsp;',
        display: 'All',
        width: '50%',
        headerClass: "first",
        rowClass: "text-right",
      },
      {
        propertyName: 'amount',
        title: 'Amount',
        display: 'All',
        headerClass: "text-right",
        rowClass: "text-right",
        width: '50%'
      },
    ]
    this.columnsScrollable = [{
        title: 'Amount',
        propertyName: 'value',
        display: 'All',
        // width: '10%'
      },
      {
        propertyName: 'date',
        title: 'Date',
        display: 'All',
      }
    ];
    this.columnsCustomClasses = [{
        title: 'Date',
        propertyName: 'date',
        display: 'All'
      },
      {
        propertyName: 'name',
        title: 'Customer',
        display: 'All',
      },
      {
        propertyName: 'amount',
        title: 'Amount',
        display: 'All',
        headerClass: "text-right",
        rowClass: "text-right"
      },
    ];
    this.columnsCustomRows = [{
        title: 'Date',
        propertyName: 'date',
        display: 'All'
      },
      {
        propertyName: 'name',
        title: 'Customer',
        display: 'All',
      },
      {
        propertyName: 'amount',
        title: 'Amount',
        display: 'All',
        headerClass: "text-right",
        rowClass: "text-right"
      },
      {
        title: '',
        display: 'Desktop',
        isCustom: true,
      }
    ]
  },
  actions: {
    openDetails(value) {
      if (value.isOpenRow) {
        set(value, 'isOpenRow', false);
      } else {
        set(value, 'isOpenRow', true);
      }
    }
  }
});

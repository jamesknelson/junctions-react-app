import React, { Component } from 'react';
import { createJunction } from 'junctions';
import { Link } from 'react-junctions';

const junction = createJunction({
  Invoice: {
    path: '/:invoiceId',
    paramTypes: {
      invoiceId: { required: true },
    },
  },
  Add: {},
});

class InvoicesScreen extends Component {
  static junction = junction

  render() {
    const route = this.props.route;
    const locate = this.props.locate;

    return (
      <div>
        <ul>
          <li><Link to={locate(junction.createRoute('Invoice', { invoiceId: 1 }))}>Invoice 1</Link></li>
          <li><Link to={locate(junction.createRoute('Invoice', { invoiceId: 2 }))}>Invoice 2</Link></li>
          <li className="divider" />
          <li><Link to={locate(junction.createRoute('Add'))}>Add Invoice</Link></li>
        </ul>
        {route &&
          <div>
            {route.key === 'Add'
              ? <h3>New Invoice</h3>
              : <h3>Invoice {route.params.invoiceId}</h3>
            }
          </div>
        }
      </div>
    );
  }
}

export default InvoicesScreen;

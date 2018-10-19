import * as React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import { listBlogs } from '../graphql/queries';

export class Blogs extends React.PureComponent {
  render() {
    return (
      <Query query={gql(listBlogs)}>
        {({ data, loading }) => {
          if (loading || !data || !data.listblogs) {
            return null;
          }
          return data.listBlogs.items.map((b: any) => (
            <div key={b.name}>{b.name}</div>
          ));
        }}
      </Query>
    );
  }
}

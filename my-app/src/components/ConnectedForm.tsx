import * as React from 'react';
import { createBlog } from 'src/graphql/mutations';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import { CreateBlogMutation, CreateBlogMutationVariables } from '../API';
import { Form } from './Form';
import { listBlogs } from '../graphql/queries';

export class ConnectedForm extends React.PureComponent {
  render() {
    return (
      <Mutation<CreateBlogMutation, CreateBlogMutationVariables>
        mutation={gql(createBlog)}
      >
        {mutate => (
          <Form
            onSubmit={async input => {
              const response = await mutate({
                variables: { input },
                refetchQueries: [{ query: gql(listBlogs) }],
              });
              console.log(response);
            }}
          />
        )}
      </Mutation>
    );
  }
}

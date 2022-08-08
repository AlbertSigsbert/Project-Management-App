const { projects, clients} = require('../sampleData');

const { GraphqlObjectType, GraphQLID, GraphQLString } = require('graphql');


//Client Type
const ClientType = new GraphqlObjectType({
    name: 'Client',
    fields: () => ({
        id: { type :  GraphQLID },
        name: { type: GraphQLString},
        email: { type: GraphQLString},
        phone: { type: GraphQLString},
    })
});

const RootQuery = new GraphqlObjectType({
    name: 'RootQueryType',
    
})
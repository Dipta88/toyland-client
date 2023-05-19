import React from 'react';

const Blog = () => {
    return (
   <div className='text-3xl pl-48 pt-20 pr-20 text-pink-100'>
        <div>
        Q1: What is an access token and refresh token? How do they work and where should we store them on the client-side?

       <p className='mt-10 mb-10 text-2xl text-lime-300'> Answer: 
       Access tokens and refresh tokens are vital for authentication and authorization. An access token grants temporary authorization to access protected resources, while a refresh token provides a means to obtain a new access token when the current one expires. Access tokens are used in client requests to access protected resources, while refresh tokens are securely stored on the client-side. It is important to store access tokens securely, typically in memory, and protect refresh tokens using secure storage methods such as HTTP-only cookies or local storage. Staying updated with security best practices ensures the integrity and protection of these tokens.</p>
        

        
        
        </div>
       
       <div>
       Q2: Compare SQL and NoSQL databases?

     
       <p className='mt-10 mb-10 text-2xl text-yellow-200'> Answer: 
       SQL databases follow a structured schema, support complex relational queries, and provide strong ACID transactions for data integrity. In contrast, NoSQL databases offer a flexible schema, scale horizontally for high scalability and performance, handle unstructured or semi-structured data, and prioritize eventual consistency for distributed systems. The choice depends on the specific application's requirements, data structure, scalability needs, and the trade-off between relational querying and flexibility/scalability of data models. Hybrid approaches can also be used to combine the strengths of both SQL and NoSQL databases in certain use cases.
       
       
       
       
       </p>


        </div>
       
            <div>
            Q3:  What is express js? What is Nest JS ?

            <p className='mt-10 mb-10 text-2xl text-rose-600'> Answer: Express.js is a minimalist and flexible web application framework for Node.js, providing a simple and straightforward approach to building web servers and APIs. It offers a range of features and middleware for handling HTTP requests, routing, and creating server-side applications.

            Nest.js is a progressive, extensible, and TypeScript-based framework for building efficient and scalable server-side applications. It leverages concepts from Angular and provides a modular architecture with dependency injection, decorators, and powerful features for building robust and maintainable applications.  </p>
        

            
            
            
            
            </div>
        
          <div>
          
          Q4: What is MongoDB aggregate and how does it work ?

          <p className='mt-10 mb-10 text-green-500 text-2xl'> Answer:  Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.

          One of the most common use cases of Aggregation is to calculate aggregate values for groups of documents. This is similar to the basic aggregation available in SQL with the GROUP BY clause and COUNT, SUM and AVG functions. MongoDB Aggregation goes further though and can also perform relational-like joins, reshape documents, create new and update existing collections, and so on. 
          
          While there are other methods of obtaining aggregate data in MongoDB, the aggregation framework is the recommended approach for most work.
          
          There are what are called single purpose methods like estimatedDocumentCount(),  count(), and distinct() which are appended to a find() query making them quick to use but limited in scope.
          
          The map-reduce framework on MongoDB is a predecessor of the aggregation framework and much more complex to use. MongoDB have deprecated </p>
          
          
          </div>
       
    
      </div>
    );
};

export default Blog;
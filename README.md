# match-making

# Start

$ yarn install
$ yarn Start

# database

Please make sure mongoDB is running at localhost:27017

# insert sample database

Go to localhost:3000/seed

Note:
As the app scale, larger data set and more concurrent requests may definitely affect the performance of endpoint. There are many ways to improve the performance.

1.  Upgrade hardwares: increase the processing power of the database hosted machine and backend server.
2.  Create multiple server node with a load balancer in front, so different requests can be dispatch to different node to proceed. Replica set of MongoDB is also required.
3.  Redis caching can be implemented for faster access of same query request.
4.  Apply clustering in each node to increase number of worker threads
5.  Apply pagination to limit the size of result needed to transfer back to client which reduced the transfer time.
6.  Mongo query can be enhance by using different operators, this needed for me to further study.
7.  The field “timeslot” is too flexible, which mean too many combinations, the more combinations , the harder for comparison. Maybe we can try this structure:
    timeslot: {
    mon: [0, 1, 2, 3, 12, 13, 23],
    tue: [q, 2, 13, 14, 15],
    wed: [],
    thu: [],
    fri: [],
    sat: [],
    sun: [],
    }
    each number inside the array represent each hour of the day, so totally 24 per day(or maybe 48, 0.5 hour each).
    A standardised structure should be easier for comparison.
8.  ad status should be introduced to the Ad model, so we can ignore the old or non active ad.

All the above should be applied in different situation depending on budget, time and client's need.

Suggestion:
In this challenge, I didn't reference the ad to the user model which may contain the teacher profile. So one teacher may have many ads, each ads may have only 1 owner. Therefore when student read the ad, he/she may also want to know the teacher's profile, Populate the owner profile may require at each search.
It is not the only case that we need to query data and manipulate it to facilitate interface display, so GraphQL may help to minimize the number of api calls from client to server, also get the exact data need without unused fields.

# Reference

Geospatial Queries
https://docs.mongodb.com/manual/geospatial-queries/

sample call
http://localhost:3000/api/ads/search?studentId=5b1d6b9d6d3b363b2b5875ca&latitude=22.284308&longitude=114.150664&distance=3

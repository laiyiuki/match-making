# match-making

˜

# Start

* yarn install
* yarn Start

# databaset

Please make sure mongoDB is running at localhost:27017
Click [here](localhost:3000/seed) to insert sample data.

# Note:

As the app scale, larger data set and more concurrent requests may definitely affect the performance of endpoint. There are many ways to improve the performance.

1.  Upgrade hardwares: increase the processing power of the database hosted machine and backend server.
2.  Create multiple server node with a load balancer in front, so different requests can be dispatch to different node to proceed. Replica set of MongoDB is also required.
3.  Redis caching can be implemented for faster access of same query request.
4.  Apply clustering in each node to increase number of worker threads
5.  Apply pagination to limit the size of result needed to transfer back to client which reduced the transfer time.
6.  Mongo query can be enhance by using different operators, this needed for me to further study. Using query analyser like Mongo Compass to analyse the query performance.
7.  The field “timeslot” in the sample set (in Google docs) is too flexible, which mean too many combinations, the more combinations , the harder for comparison. I redesigned the timeslot structure as a simple array which contain set of number from 1 to 168, each number represent 1 hour slot, i.e. 1 represent Monday 00:00 - 01:00, 168 represent Sunday 23:00 - 00:00. A standardised structure should be easier for comparison.
8.  ad status should be introduced to the Ad model, so we can ignore the old or non active ads.

All the above should be applied in different situation depending on budget, time and client's need.

Suggestion:
In this challenge, I didn't reference the ad to the user model which may contain the teacher profile. So one teacher may have many ads, each ads may have only 1 owner. Therefore when student read the ad, he/she may also want to know the teacher's profile, Populate the owner profile may require at each search.
It is not the only case that we need to query data and manipulate it to facilitate interface display, so GraphQL may help to minimize the number of api calls from client to server, also get the exact data need without unused fields.

# Endpoints

_GET_ /api/students Return all students
_GET_ /api/students/:id Return specific student
_GET_ /api/ads/ Return all ads
_GET_ /api/ads/search?studentId=xxx Return all ads match with specific student preferred subject and time
_GET_ /api/ads/search?studentId=xxx&longitude=xx&latitude=xx&distance=xx Return all ads match with specific student preferred subject and time plus location within a distance
_GET_ /seed/ Reset database with sample data

# Reference

[Geospatial Queries](https://docs.mongodb.com/manual/geospatial-queries/)

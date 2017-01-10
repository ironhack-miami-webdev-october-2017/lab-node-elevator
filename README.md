![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# Node | The Elevator

## Learning Goals

After this learning unit, you will be able to:

- Build your own elevator using node asynchrony
- Create as many request as you want and save them in a queue
- Create callback functions to respond asynchronously to the orders recieved
- Original idea: http://play.elevatorsaga.com/

![](https://media.giphy.com/media/P8XjmO1TTX3Nu/giphy.gif)

## Introduction

Elevators are a common element in real-life that requires asynchrony. In this Lab, we are going to create an elevator able to respond to different asynchronous requests. 

The elevator will have a queue where is going to store all the request in the order they are made. Then, the elevator will move up or down depending on the next floor requested. Once it arrives to the actual requested floor, it will get the next one until there are no more requests in the queue.

### Requirements

- [Fork this repo (Pending)]()
- Clone this repo into your `~/code/labs`

## Submission

Upon completion, run the following commands
```
$ git add .
$ git commit -m "done"
$ git push origin master
```
Navigate to your repo and create a Pull Request -from your master branch to the original repository master branch.

In the Pull request name, add your name and last names separated by a dash "-"

## Deliverables
In your starter code folder you will find every file you need to finish the game. Push every needed file to make your game work properly.

## Exercise

### Iteration 1

In the `starter_code` we will have an `elevator.js` file where we will develop the *Elevator* class, a `person.js` file where we will create the *Person* class and an `index.js` file where we will create the objects of this classes and operate with them.

#### The *Elevator* class

An elevator will have the capability to: 

- Start listening for requests
- Stop listening for requests
- Receive a new request to store it in the elevator list
- Update the elevator position going to the requested floors
- Remove a request from the list once is completed
- Go up floor by floor
- Go down floor by floor
- Print in the console the actual status of the elevator in the next format:
  `Direction: up | Floor: 0 | Requests: 3,6,10,0`

### Iteration 2

When elevators travel up and down to pick up and leave passengers, people actually come into the elevator.

Create a new object to model people.

#### The *Person* class

- A person will have a name, an `originFloor` and a `destinationFloor`

Use this object to add people into the elevator. You will have three different lists:

- People waiting for the elevator -they made the request and they're waiting the elevator to come
- People currently in the elevator (passengers)
- A list of pending requests

You should display passenger's names in the console as they come and go specifying if a person recently entered or left the elevator.

Good luck!

![Giphy IMAGE](https://media.giphy.com/media/l0MYIyrdQeWyEtQm4/giphy.gif)

## Extra resources

- [The Elevator Saga](http://play.elevatorsaga.com/)
- [Codepen](http://codepen.io/brigham/pen/AErDk) - Ok, we're in the backend, right? But this is a pretty simulation :stuck_out_tongue_closed_eyes: 

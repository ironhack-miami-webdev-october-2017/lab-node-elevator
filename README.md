We are going to create a function `floorUp` to update the actual floor by incrementing one to the current position. So, if the actual floor was 0, it will turn 1.

Also, we will create a similar function called `floorDown` to update the actual floor by substracting one to the current position. So, if the actual floor was 6, it will turn 5.

:::danger
Remember to consider the limits of the elevator, so you won't go further the top floor or below the entrance level
:::

:::info
Test the elevator. Make it go to the top floor and the entrance level by using `floorUp` and `floorDown` displaying it in the console with `log`
:::

### Iteration 3

Elevators pick up and leave passengers, so we will have to model those passengers. Let’s use our class Person to describe a Person.

#### The *Person* class

A person will have:
- A `name`
- An `originFloor`
- A `destinationFloor`

:::info
:warning: The `person.js` file is not included in your starter-code, so you will have to create a new file
:::

Now, we need to think about what happens when a person ‘calls’ the elevator. In the Elevator class, we will create the `call` method. This method should add a request into the elevator’s queue. A good idea would be to add the whole person object to the requests collection.

We will then process the list of requests in order for the elevator to process them. We will need a list of floors that the elevator should serve in the `update` method.

### Iteration 4

When elevators travel up and down to pick up and leave passengers, people actually come into the elevator.

To keep a track of everyone without messing all up, you will have three different lists:

- `waitingList`: people waiting for the elevator -they made the request and they're waiting the elevator to come
- `passengers`: people currently in the elevator
- `requests`: a list of pending requests

#### The Waiting List

When a person calls the elevator (the `call` function is executed), we will add that person into the `waitingList` array. Notice they're not in the `passengers` collection because they're not yet in the elevator.

Also, add the (`originFloor`) to the `requests` array to let the elevator know where it has to stop to pick the passanger up.

#### A passenger enters the elevator

When the elevator arrives to a floor, it should check the `waitingList` array to verify if a person is waiting there. If this condition occurs, add the person into the `passengers` array and delete the entry from the `waitingList` array.

We will show a message to indicate what just happens:

`Julia has enter the elevator`

#### A passenger leaves the elevator

When the elevator arrives to a floor, it should check the `passengers` collection. If a passenger's `destinationFloor` matches the current floor,  we will delete that person from the `passengers` array.

We will show a message to indicate what just happens:

# Pub-Sub Design Pattern

This repository demonstrates my implementation of the Pub-Sub design pattern as part of the assignment for Taobin.

## Key Features

The implementation consists of the following components:

1. **`machine.ts`**: Defines the machine entity and its stock management.
2. **`event.ts`**: Represents events that can be published and subscribed to.
3. **`subscribe.ts`**: Handles subscriber behavior for different event types.
4. **`PublishSubscribeService.ts`**: Implements the pub-sub mechanism to manage event publication and subscription.
5. **`main.ts`**: Contains the main logic to demonstrate and test the system's functionality.

Additionally, the **`idea.ts`** and **`app.ts`** files are prototypes and not part of the main execution process.

## Setup Instructions

### Prerequisites
- Install [Node.js](https://nodejs.org/) and [TypeScript](https://www.typescriptlang.org/).
- Clone this repository to your local machine.

### Build and Run Using Makefile
1. Open a terminal in the repository's root directory.
2. Use the following commands:
   - **Build**: Compile TypeScript files to JavaScript.
     ```bash
     make build
     ```
   - **Run**: Execute the program.
     ```bash
     make run
     ```
   - **Clean**: Remove compiled JavaScript files.
     ```bash
     make clean
     ```
   - **Help**: Display available commands.
     ```bash
     make help
     ```

### Manual Build and Run
1. Compile the TypeScript code:
   ```bash
   tsc main.ts

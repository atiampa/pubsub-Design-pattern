# Variables
TS_FILES = $(filter-out idea.ts app.ts, $(wildcard *.ts)) # Exclude prototype files
JS_FILES = $(TS_FILES:.ts=.js)

# Default target
all: build run

# Compile TypeScript files
build:
	tsc $(TS_FILES)

# Run the main.js file
run: build
	node main.js

# Clean up compiled JavaScript files
clean:
	rm -f $(JS_FILES)

# Help message
help:
	@echo "Usage:"
	@echo "  make build    - Compile TypeScript files to JavaScript, excluding prototypes"
	@echo "  make run      - Run the main.js file"
	@echo "  make clean    - Remove all compiled JavaScript files"
	@echo "  make help     - if anything occured just use tsc main.ts"

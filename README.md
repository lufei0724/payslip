# Employee monthly pay slip

## Why built the solution the way
The solution is to develop small software: divide the whole application into self-contained components that each constitutes very few files (e.g. controller, service, data access, test, etc.)  

There are top 3 benefits that the solution brings
1. Keep the software complexity low
2. Improves maintainability. Each file is relatively small and so is easier to understand and change
3. Improves modularity. The separate modules are easier to test, implement or design.

## Design solution made

The project structure is shown as per below.

```
src
│
└───components     
	|
	└───payslip   # Payslip calculation and format 
	│
	└───tax       # Tax data access and tax calculation
└───libs		  # Libraries
   	app.js        # App entry point
```

In each component, use the principle of SoC to separate controller, service and data access layer.


## how to run code

## how to run tests

## assumptions && trade-offs
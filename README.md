# Bamazon
##HW 10 Bamazon - Node.js and MySQL

In this activity, I created an Amazon-like storefront using mySQL.  This app takes in orders from customers and depletes stock from the store's inventory.

Upon initiating "node bamazon.js" in the terminal, the user will be prompted with "Who are you?" and a menu of 4 choices: customer, manager, supervisor, and Exit.

![bamazon user prompt](/images/bamazon01_UserPrompt.png)

Upon choosing 'customer', the user will be informed of their choice and then asked to select a department to shop in.

![bamazon dept prompt](/images/bamazon02_DeptPrompt.png)

Depending on the department chosen, the terminal will then display the confirmation of department choice and a table of products in the respective department. The table displays the product name, department, and price. 

Following the table is the prompt to choose which item the user would like to purchase. The user can navigate to their choice using the arrow keys or enter the product id.

![bamazon item prompt](/images/bamazon03_Electronics.png)

Next, the app prompts the user with the message "How many would you like to buy?" If the store does not have enough of the product to meet the customer's request, the app logs the phrase "Sorry, not enough quantity."

![insufficient quantity](/images/bamazon04_InsufficientQuantity.png)

However, if the store does have enough of the product, the customer's order is fulfilled and they are shown the total cost of their purchase.

![Television Purchase Receipt](/images/bamazon05_TelePurchase.png)

This process can be repeated for each department - electronics, appliances, and recreation.

![Appliances-CoffeeMaker](/images/bamazon06_AppliancesCoffee.png)
![Recreation-Bicycle](/images/bamazon07_RecreationBicycle.png)


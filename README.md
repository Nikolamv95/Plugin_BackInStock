# Plugin_BackInStock
Custom functionality which will be used on Product Details Page (PDP) to allow customers to subscribe for notification when out-of-stock product is available.

## ℹ️ Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Site View](#site-view)
	
## 💻 Technologies
Project is created with:
* SalesForce Commerce Cloud
* JavaScript
* Node.js
* JQuery
* Bootstrap
* Isml
* Scss
* API integration with Twilio

## 📲 Site View

### Product Page with unavailable product 
![Unavailable-Product](https://user-images.githubusercontent.com/75838730/150022765-e4498fc3-2e35-4814-9419-5d54f96923d4.png)

### Product Page with product in stock 
![Available-Product](https://user-images.githubusercontent.com/75838730/150022995-929f3540-5581-47a5-9ea8-e073ce7358ea.png)

### Modal form for subscribe
Only a specific format of phone numbers will be accepted - +359999999999
![Subscribe](https://user-images.githubusercontent.com/75838730/150023114-d5d4f2e0-431b-492d-a1b0-0f0566993c78.png)

if the number is wrong appropriate message will be shown
![Error](https://user-images.githubusercontent.com/75838730/150023421-4bd42850-c8f1-4392-8563-e507ebe188ad.png)

if the number is accepted you will see success message
![Success](https://user-images.githubusercontent.com/75838730/150023537-33b86458-fa40-47ac-9ea1-a98d36b39385.png)

### Custom object definition in the business manager
![custom-object-definition](https://user-images.githubusercontent.com/75838730/150023666-95f867ce-64cb-4d4a-93f2-202212d863e3.png)

### Custom object with records
![customObject](https://user-images.githubusercontent.com/75838730/150023825-0bbbf068-cb84-4084-a1b4-35e455fd6d1d.png)

All numbers will be saved in comma separated value string
![customObjectRecord](https://user-images.githubusercontent.com/75838730/150023837-ecc66e8d-9d1b-463b-8543-3ae481b40156.png)

### Job query in the business manager
On every 12 hours job query should run to send SMS (with Twilio API service) to subscribers when product is back in stock
![JobQuerry](https://user-images.githubusercontent.com/75838730/150024353-c0897881-186f-4b28-98c7-aa1b7ff15829.png)

## 👨‍ Author

[Nikola Margaritov](https://github.com/Nikolamv95)

For more interesting projects you can always check my github.

## 👀 Try it out
The project is developed over RefArch & RefArch Global architecture.
1. Download RefArch & RefArch Global from the SalesForce Commerce Cloud Repo (https://github.com/SalesforceCommerceCloud/storefront-reference-architectur)
2. Download Plugin_BackInStock
3. Upload Plugin_BackInStock in to the code version which you want to have this functionality (you can do it with prophet extension in VS Code)
4. Check if the Plugin_BackInStock is uploaded in the cartridges
5. In the cartridges path (Manage Sites > RefArch-Settings > Cartridges > add on first place Plugin_BackInStock (plugin_backinstock:app_storefront_base)
6. Enjoy

```
$ git clone https://github.com/Nikolamv95/Plugin_BackInStock.git
$ cd Plugin_BackInStock
```

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

## 📝 License

This project is licensed under MIT license.

## 👨‍🚀 Show your support

Give a ⭐ if you like this project!


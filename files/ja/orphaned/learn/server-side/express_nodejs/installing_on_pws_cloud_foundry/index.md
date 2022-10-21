---
title: PWS/Cloud Foundry に LocalLibrary をインストールする
slug: orphaned/Learn/Server-side/Express_Nodejs/Installing_on_PWS_Cloud_Foundry
original_slug: Learn/Server-side/Express_Nodejs/Installing_on_PWS_Cloud_Foundry
---

{{LearnSidebar}}

この記事では Pivotal Web Services の PaaS クラウドに*地域図書館*をインストールする方法の実際的なデモンストレーションを提供します。これは、チュートリアルのパート 7 で使用されている PaaS クラウドサービスである Heroku のフル機能のオープンソース代替です。PWS/Cloud Foundry は、Heroku (または別の PaaS クラウドサービス) に代わるものを探している場合、または単に何か違うことを試したい場合には、絶対にチェックする価値があります。

## Why PWS?

Pivotal Web Services is a public instance of the [Open Source Cloud Foundry Platform](https://www.cloudfoundry.org/). It is a polyglot platform supporting many different languages including Node.js, Java, PHP, Python, Staticfiles, and Ruby. It has a introductory free trial and is incredibly efficient for running Node applications! As Node and Express are open source projects, there is consistency with working with an open deployment platform such as Cloud Foundry. You can get under the [hood](https://github.com/cloudfoundry) and see how an application is hosted.

There are multiple reasons to use PWS!

- PWS has a [flexible pricing](https://run.pivotla.io/pricing) that is extremely well tuned for small runtimes such as node. It's possible to run a redundant pair of your app for less than $5 per month. That includes a standby failover system to take over running your app if the main server fails at any point.
- As a PaaS, PWS takes care of a lot of the web infrastructure for us. This makes it much easier to get started, because you don't worry about servers, load balancers, reverse proxies, restarting your website on a crash, or any of the other web infrastructure that PWS provides for us under the hood.
- Because PWS is using Cloud Foundry, an open platform. You can therefore easily deploy your application to other Cloud Foundry providers such as [IBM BlueMix](https://www.ibm.com/cloud-computing/bluemix/), [AnyNines](https://www.anynines.com/) and [Swisscomm Application Cloud](https://www.swisscom.ch/en/business/enterprise/offer/cloud-data-center-services/paas/application-cloud.html). The below instructions will work with any standard Cloud Foundry deployment with minor modifications.
- While it does have some limitations, these will not affect this particular application. For example:

  - PWS and Cloud Foundry provide only short-lived storage so user-uploaded files cannot safely be stored on PWS itself.
  - The free trial is good for a year and only up to $87 of app usage. For a typical Node app that means you can run an app for an entire year.

- Mostly it just works, and if you end up loving it and want to upgrade, scaling your app is very easy.
- PWS and other Cloud Foundry applications are used for production apps.

## How does PWS work?

PWS runs websites and applications using containers and has been for many years. Cloud Foundry started using a container technology called Warden and is now using a container system called Garden. These are very similar to the popular Docker container and in fact, many installations of Cloud Foundry support deploying Docker containers.

One of the advantages of using Cloud Foundry is that you do not need to create the container spec, as Cloud Foundry's buildpacks will manufacture them based on the latest components. Apps on Cloud Foundry should follow 12 Factor guidelines as the containers deployed are ephemeral and may be cleaned up at anytime and redeployed somewhere else in the cloud. This ensures that your apps and platform have the latest software. An application can consist of multiple instances where the application is placed into redundant containers that enable high availability of your app. Cloud Foundry will automatically handle all the load balancing between identical instances. This allows you to scale your application for performance and availability

Since the file system is ephemeral any temporary storage or services should be located elsewhere using backing services. This can be done using marketplace services available on different providers or by bringing your own via [User Provided Services](https://docs.run.pivotal.io/devguide/services/user-provided.html).

## What do we cover below?

This post covers how to modify the LocalLibrary application from the tutorial for deployment on PWS and Cloud Foundry. In doing so, it covers the basics of deploying any node.js application to PWS with the following steps.

- Configuring the package.json file to run with the engines available on PWS.
- Adding and installing the ['cfenv' node module](https://github.com/cloudfoundry-community/node-cfenv) to make working with services easier.
- Using the cfenv module to connect to a MongoDB instance from mLab that was created and bound using the PWS marketplace.
- Using the [cf CLI](https://github.com/cloudfoundry/cli) tool to create a new mongoDB service instance and bind it to the local library application.
- How to set environment variables for Node using the cf CLI.
- How to look at logs, again using the cf CLI tool.

So let's get started. You have two options, you can go through the tutorial from the [beginning](/ja/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website) or you can just download the completed project and modify it from there for use on PWS. To do the latter, you can do the following from a terminal:

```bash
git clone https://github.com/mdn/express-locallibrary-tutorial
```

You'll then need to follow the preparation steps listed in the [Getting your website ready to publish](/ja/docs/Learn/Server-side/Express_Nodejs/deployment#Getting_your_website_ready_to_publish) section of [Express Tutorial Part 7: Deploying to production](/ja/docs/Learn/Server-side/Express_Nodejs/deployment), before then following the steps listed below.

> **メモ:** This work flow is based on the [Mozilla Heroku work flow in the main Express/Node tutorial series](/ja/docs/Learn/Server-side/Express_Nodejs/deployment#Example_Installing_LocalLibrary_on_Heroku) for consistency, to help readers compare and contrast.

## Modifying the LocalLibrary for PWS

Deployment of a Node application on Cloud Foundry takes the following steps. Using the downloaded 'cf' CLI tool on your environment, your source code and supporting metadata files are uploaded to Cloud Foundry which will assemble and package the components of your application. Note that your files need to be located on your system to deploy or as a zip archive somewhere accessible on the internet. We'll assume the former.

This means, no assumptions about which source control system is used. As long as you have a complete source tree in your local file system you can deploy the app. There are some things you have to make available to ensure the correctly assembly of your Node application. First Cloud Foundry cf CLI will look for the presence of the 'package.json' file to determine the dependencies and download the necessary components. The rules of this assembly are defined in Cloud Foundry's [nodejs buildpack](http://docs.run.pivotal.io/buildpacks/node/). An optional cloud foundry manifest file can specify information about your application such as name, size and start command if non-standard. In addition to deploying the application, the cf CLI tool can also configure services, set environment variables and view logs. That's all the overview you need in order to get started (see [Getting Started on Pivotal Web Services](https://docs.run.pivotal.io) for a more comprehensive guide). Let's start making the changes so you'll need to deploy the _LocalLibrary_ application to PWS.

### Set node version

The **package.json** contains everything needed to work out your application dependencies and what file should be launched to start your site. Cloud Foundry and PWS detects the presence of this file, and will use it to provision your app environment. The only useful information missing in our current **package.json** is the version of node. We can find the version of node we're using for development by entering the command:

```bash
node --version
# will return version e.g. v6.10.3
```

Open **package.json** with a text editor, and add this information as an **engines > node** section as shown (using the version number retrieved above).

```json
{
  "name": "express-locallibrary-tutorial",
  "version": "0.0.0",
  "engines": {
    "node": "6.10.3"
  },
  "private": true,
  ...
```

### Database configuration

So far in this tutorial we've used a single database that is hard coded into the **app.js** file. Normally we'd like to be able to have a different database for production and development, so next we'll modify the LocalLibrary website to get the database URI from the OS environment, and otherwise use our development database that we added manually earlier. Cloud Foundry has a very flexible services model that enables multiple services of the same type to exist in the environment. It stores all services related configurations in a single parseable JSON object called `VCAP_SERVICES`. A typical `VCAP_SERVICES` variable looks like this:

```json
{
 "VCAP_SERVICES": {
  "mlab": [
   {
    "credentials": {
     "uri": "mongodb://CloudFoundry_test_dev:somecr8zypassw0rd@dbhost.mlab.com:57971/CloudFoundry_dbname"
    },
    "label": "mlab",
    "name": "node-express-tutorial-mongodb",
    "plan": "sandbox",
    "provider": null,
    "syslog_drain_url": null,
    "tags": [
     "Cloud Databases",
     "Developer Tools",
     "Web-based",
     "Data Store",
    ],
    "volume_mounts": []
   }
  ]
 }
}
```

Writing the code to extract and parse this environment variable is not hard, but it doesn't add a lot of value when others have written libraries to do this. In this case, there is a node.js package we can use called [_cfenv_](https://github.com/cloudfoundry-community/node-cfenv).

This will download the cfenv module and its dependencies, and modify the package.json file as required. Open **app.js** and find the block with all the 'requires' that load the modules into your application. In this example look for the line that looks something like this:

```js
var expressValidator = require('express-validator');
```

If you cannot find that exact line, look for the blocks of 'requires' and look for the last one. Add the following text after it:

```js
var cfenv = require('cfenv');
```

1. To install the package, go to your terminal and make sure you are in the directory where the `package.json` file for LocalLibrary is. From the command line, type:

    ```bash
    npm install cfenv
    ```

2. Now that you have loaded the module, this next line will instantiate an object that will contain the app and services information required for deployment. Add the following after the line that contains `app.use(helmet());`

    ```js
    // Set up CF environment variables
    var appEnv = cfenv.getAppEnv();
    ```

    When this line executes, all the Cloud Foundry application environment information will become available to the application in the `appEnv` object.

3. Now it is time to update the application to use the database configured by the platform. Find the line that sets the mongoDB connection variable. It will look something like this:

    ```js
    var mongoDB = process.env.MONGODB_URI || dev_db_url;
    ```

4. You will now modify the line with the following code `appEnv.getServiceURL('node-express-tutorial-mongodb')` to get the connection string from an environment variable that is being managed by the `cfenv` module. If no service has been created and bound it will use your own database URL you created as part of the tutorial instead of the one from the environment. So replace the line above with the following:

    ```js
    var mongoDB = appEnv.getServiceURL('node-express-tutorial-mongodb') || dev_db_url;
    ```

5. Now run the site locally (see [Testing the routes](/ja/docs/Learn/Server-side/Express_Nodejs/routes#Testing_the_routes) for the relevant commands) and check that the site still behaves as you expect. At this point your app is ready to use with Cloud Foundry and Pivotal Web Services.

## Get a Pivotal Web Services account

To start using Pivotal Web Services you will first need to create an account (skip ahead to [Create and upload the website](#Create_and_upload_the_website) if you've already got an account and have already installed the PWS cf CLI client).

- Go to <https://run.pivotal.io> and click the **SIGN UP FOR FREE** button.
- Enter your details and then press **CREATE FREE ACCOUNT**. You'll be asked to check your email for a sign-up email.
- Click the account activation link in the signup email. You'll be taken back to your account on the web browser and you will complete the registration.
- You will set your password and go through the rest of the new user sign up and how to claim your free trial account. Note you need a mobile phone to confirm your account. You will receive an "org" account funded with $87 of application usage credit. Note your email account can be in multiple orgs on PWS. This is similar to your user account on services like GitHub.
- Go to [https://console.run.pivotal.io](https://login.run.pivotal.io) and login in. You'll then be logged in and taken to the PWS dashboard: <https://console.run.pivotal.io>.

## Install the cf CLI client

The cf CLI client is a software tool for managing and deploying your application. Download and install the PWS cf CLI client by following the [instructions on Pivotal Web Services](https://console.run.pivotal.io/tools) or downloading directly from [GIthub](https://github.com/cloudfoundry/cli). Be sure to download the correct version for your computer. After the client is installed you will be able run commands, for example to get help on the client:

```bash
cf help
```

We'll now go through the steps to login to PWS using the CLI and deploy — or in Cloud Foundry parlance "push" your app.

## Create and upload the website

To create the app we navigate to the directory where our modified files are. This is the same directory where the LocalLibrary package.json file is located. First, let's tell the cf CLI which Cloud Foundry instance you want to use. We need to do this, since the cf CLI tool can be used with any standard Cloud Foundry system, so this command indicates which specific Cloud Foundry you are using. Enter the following terminal command now:

```bash
cf api api.run.pivotal.io
```

Next login using the following command (enter your email and password when prompted):

```bash
cf login
Email: enter your email
Password: enter your password
```

We can now push our app to PWS. In the below example. replace 'some-unique-name' with something you can remember that is likely to be unique. If it isn't unique, the system will let you know. The reason this name has to be unique to the PWS system is it is the address we will use to to access your LocalLibrary application. I used _mozilla-express-tutorial-xyzzy_. You should use something else.

```bash
cf push some-unique-name -m 256MB
```

Note the `-m` flag we added is not required. We just included it so that we only use 256MB of memory to run the app. Node apps typically can run in 128 MB, but we are being safe. If we didn't specify the memory, the CLI would use the default 1 GB of memory, but we want to make sure your trial lasts longer. You should now see a bunch of text on the screen. It will indicate that the CLI is uploading all your files, that it's using the node buildpack, and it will start the app. If we're lucky, the app is now "running" on the site at the URL `https://some-unique-name.cfapps.io`. Open your browser and run the new website by going to that URL.

> **メモ:** The site will be running using our hardcoded development database at this time. Create some books and other objects, and check out whether the site is behaving as you expect. In the next section we'll set it to use our new database.

## Setting configuration variables

You will recall from a preceding section that we need to [set NODE_ENV to 'production'](#NODE_ENV) in order to improve our performance and generate less-verbose error messages.

1. Do this by entering the following command:

    ```bash
    cf set-env some-unique-name NODE_ENV production
    ```

2. We should also use a separate database for production. Cloud Foundry can take advantage of a marketplace to create a new service and automatically bind it to your app. Bind means place the service database credentials in the environment variable space of the container running your application for you to access. Enter the following commands:

    ```bash
    cf create-service mlab sandbox node-express-tutorial-mongodb
    cf bind-service some-unique-name node-express-tutorial-mongodb
    ```

3. You can inspect your configuration variables at any time using the `cf env some-unique-name` command — try this now:

    ```bash
    cf env some-unique-name
    ```

4. In order for your applications to use the new credentials you will have to restage your application, meaning that it will restart and apply the new environment variables. This can be done using the following — enter this command now:

    ```bash
    cf restage some-unique-name
    ```

5. If you check the home page now it should show zero values for your object counts, as the changes above mean that we're now using a new (empty) database.

## Debugging

The PWS cf client provides a few tools for debugging:

```bash
>cf logs some-unique-name --recent  # Show current logs
>cf logs some-unique-name # Show current logs and keep updating with any new results
```

## Summary

If you followed the above steps, you should have now deployed the LocalLibrary app to PWS. Well done! If the deployment wasn't successful, double check all the steps.

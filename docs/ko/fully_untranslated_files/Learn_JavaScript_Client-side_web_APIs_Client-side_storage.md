---
title: Client-side storage
slug: Learn/JavaScript/Client-side_web_APIs/Client-side_storage
---

{{LearnSidebar}}

{{PreviousMenu("Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs", "Learn/JavaScript/Client-side_web_APIs")}}

현대 웹 브라우저들은 (사용자의 허락 하에) 사용자 컴퓨터에 웹사이트 정보를 저장할 수 있는 다양한 방법을 제공합니다. 그리고 필요한때 그 정보들을 읽어오죠. 이는 당신이 장기간 데이터를 보관할 수 있게 해주고 사이트와 웹문서를 당신이 지정한 설정에 따라 오프라인 상태에서도 사용할수 있게 해줍니다. 이 문서는 이러한 것들이 어떻게 동작하는지에 대한 기본지식들을 설명합니다.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">필요한 사전 지식:</th>
      <td>
        JavaScript에 대한 기본 (<a href="/ko/docs/Learn/JavaScript/First_steps">첫걸음</a>,
        <a href="/ko/docs/Learn/JavaScript/Building_blocks"
          >구성 요소</a
        >
        <a href="/ko/docs/Learn/JavaScript/Objects">JavaScript 객체</a> 참고),
        <a href="/ko/docs/Learn/JavaScript/Client-side_web_APIs/Introduction"
          >Client-side API의 기본</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">목표:</th>
      <td>
        데이터를 저장하기 위해 client-side storage API를 어떻게 사용하는지 배우기.
      </td>
    </tr>
  </tbody>
</table>

## Client-side storage?

우리는 다른 MDN 학습영역에서 [정적인 사이트](/ko/docs/Learn/Server-side/First_steps/Client-Server_overview#Static_sites)와 [동적인 사이트](/ko/docs/Learn/Server-side/First_steps/Client-Server_overview#Dynamic_sites)에 대해 이미 설명하였습니다. 현대의 대부분의 웹사이트들은 어떤 데이터베이스(서버의 저장소)를 이용하여 서버에 데이터를 저장하고, 필요한 데이터를 찾아오기 위해 [서버-사이드](/ko/docs/Learn/Server-side) 코드를 돌리고, 정적인 페이지 템플릿에 데이터를 삽입하고, HTML 결과물을 사용자의 브라우저에 표시될 수 있게 제공합니다 - 즉 동적입니다.

클라이언트-사이드 저장소는 비슷한 원리로 작동하지만, 다르게 쓰입니다. 이것은 개발자가 클라이언트 측(사용자의 컴퓨터 등)에 데이터를 저장할 수 있고 필요할 때 가져올 수 있게 해주는 자바스크립트 API로 구성되어 있습니다. 이것의 다양한 용도는 다음과 같습니다.

- 웹사이트에 대한 선호를 개인화하기(사용자가 선택한 커스텀 위젯, 배색, 폰트 크기로 보여주기)
- 이전 활동 기록 저장하기(이전 세션에 담았던 장바구니 목록 저장하기, 로그인 유지하기)
- 사이트 다운로드가 빨라지고(잠재적으로 비용이 적게 들어가고) 네트워크 연결 없이도 사용할 수 있게끔 데이터를 로컬에 저장하기
- 오프라인 상태에서 사용할 수 있도록 웹 어플리케이션 생성 문서를 로컬에 저장하기

클라이언트-사이드 저장소와 서버-사이드 저장소는 대개 함께 사용됩니다. 예를 들면, 당신은 (아마도 웹 게임이나 음악 재생 어플리케이션에서 사용할)음악 파일 여러 개를 다운받아 클라이언트-사이드 데이터베이스에 저장하고 필요할 때 재생할 수 있습니다. 사용자는 음악 파일을 한번만 다운받고, 재방문 시에는 데이터베이스에서 가져오기만 하면 됩니다.

> **참고:** There are limits to the amount of data you can store using client-side storage APIs (possibly both per individual API and cumulatively); the exact limit varies depending on the browser and possibly based on user settings. See [Browser storage limits and eviction criteria](/ko/docs/Web/API/IndexedDB_API/Browser_storage_limits_and_eviction_criteria) for more information.

### Old fashioned: cookies

클라이언트-사이드 저장소에 대한 개념은 오래전부터 있었습니다. 웹의 태동기 시절, 웹 사이트들은 사용자 경험(UX)을 개인화하는 정보들을 저장하기 위해 [cookies](/ko/docs/Web/HTTP/Cookies)를 사용했습니다. 그것들이 웹에서 보편적으로 사용된 클라이언트-사이드 저장소의 제일 오래된 형태입니다.

오늘날에는 클라이언트 사이드에 데이터를 저장하는 더 쉬운 방법이 있지만, 이 문서에서 cookies를 사용하는 법을 가르쳐 주지는 않습니다. 그러나, 이것이 현대의 웹에서 cookies가 완벽하게 쓸모없다는 것을 뜻하지는 않습니다. cookies는 세션 ID나 access token 같은 사용자 상태와 개인화에 관련된 정보를 저장하는데 여전히 보편적으로 쓰입니다. cookies에 대한 더 자세한 정보는 우리의 [Using HTTP cookies](/ko/docs/Web/HTTP/Cookies) 문서를 참고하세요.

### New school: Web Storage and IndexedDB

현대의 브라우저들은 클라이언트-사이드 데이터를 저장하는 데에 cookies보다 더 쉽고 더 효율적인 API들을 제공합니다.

- [Web Storage API](/ko/docs/Web/API/Web_Storage_API)는 이름과 대응되는 값으로 이루어진 더 작은 데이터를 저장하고 가져오는 매우 간단한 기능을 제공합니다. 이것은 사용자 이름과 로그인 여부, 스크린 배경색을 어떤 색으로 할지 등등 같은 간단한 데이터를 저장할 필요가 있을 때 유용합니다.
- [IndexedDB API](/ko/docs/Web/API/IndexedDB_API)는 복잡한 데이터를 저장할 수 있는 완벽한 데이터베이스를 브라우저에서 제공할 수 있게 해줍니다. 이것은 소비자 기록의 복잡한 데이터셋부터 오디오나 비디오 파일같은 더욱 복잡한 데이터까지 저장하는 데에 쓰일 수 있습니다.

밑에서 이런 API들을 더 배울 수 있습니다.

### The future: Cache API

몇몇 현대적인 브라우저들은 새로운 {{domxref("Cache")}} API를 제공합니다. 이 API는 특정 requests에 대한 HTTP responses를 저장하기 위해 디자인되었고, 웹사이트가 차후에 네트워크 연결 없이도 사용될 수 있도록 사이트 정보를 저장하는 등의 일을 하는데 유용합니다. Cache는 일반적으로 [Service Worker API](/ko/docs/Web/API/Service_Worker_API)와 함께 사용되지만, 꼭 그럴 필요는 없습니다.

Cache와 Service Workers의 사용은 심화 주제이므로 이 문서에서는 아래의 [Offline asset storage](#offline_asset_storage) 섹션에서 보여주는 것 이상으로 깊게 다루지는 않을 것입니다.

## Storing simple data — web storage

The [Web Storage API](/ko/docs/Web/API/Web_Storage_API) is very easy to use — you store simple name/value pairs of data (limited to strings, numbers, etc.) and retrieve these values when needed.

### Basic syntax

Let's show you how:

1. First, go to our [web storage blank template](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/web-storage/index.html) on GitHub (open this in a new tab).
2. Open the JavaScript console of your browser's developer tools.
3. All of your web storage data is contained within two object-like structures inside the browser: {{domxref("Window.sessionStorage", "sessionStorage")}} and {{domxref("Window.localStorage", "localStorage")}}. The first one persists data for as long as the browser is open (the data is lost when the browser is closed) and the second one persists data even after the browser is closed and then opened again. We'll use the second one in this article as it is generally more useful.

   The {{domxref("Storage.setItem()")}} method allows you to save a data item in storage — it takes two parameters: the name of the item, and its value. Try typing this into your JavaScript console (change the value to your own name, if you wish!):

   ```js
   localStorage.setItem("name", "Chris");
   ```

4. The {{domxref("Storage.getItem()")}} method takes one parameter — the name of a data item you want to retrieve — and returns the item's value. Now type these lines into your JavaScript console:

   ```js
   let myName = localStorage.getItem("name");
   myName;
   ```

   Upon typing in the second line, you should see that the `myName` variable now contains the value of the `name` data item.

5. The {{domxref("Storage.removeItem()")}} method takes one parameter — the name of a data item you want to remove — and removes that item out of web storage. Type the following lines into your JavaScript console:

   ```js
   localStorage.removeItem("name");
   myName = localStorage.getItem("name");
   myName;
   ```

   The third line should now return `null` — the `name` item no longer exists in the web storage.

### The data persists!

One key feature of web storage is that the data persists between page loads (and even when the browser is shut down, in the case of `localStorage`). Let's look at this in action.

1. Open our web storage blank template again, but this time in a different browser to the one you've got this tutorial open in! This will make it easier to deal with.
2. Type these lines into the browser's JavaScript console:

   ```js
   localStorage.setItem("name", "Chris");
   let myName = localStorage.getItem("name");
   myName;
   ```

   You should see the name item returned.

3. Now close down the browser and open it up again.
4. Enter the following lines again:

   ```js
   let myName = localStorage.getItem("name");
   myName;
   ```

   You should see that the value is still available, even though the browser has been closed and then opened again.

### Separate storage for each domain

There is a separate data store for each domain (each separate web address loaded in the browser). You will see that if you load two websites (say google.com and amazon.com) and try storing an item on one website, it won't be available to the other website.

This makes sense — you can imagine the security issues that would arise if websites could see each other's data!

### A more involved example

Let's apply this new-found knowledge by writing a working example to give you an idea of how web storage can be used. Our example will allow you to enter a name, after which the page will update to give you a personalized greeting. This state will also persist across page/browser reloads, because the name is stored in web storage.

You can find the example HTML at [personal-greeting.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/web-storage/personal-greeting.html) — this contains a website with a header, content, and footer, and a form for entering your name.

![A Screenshot of a website that has a header, content and footer sections. The header has a welcome text to the left-hand side and a button labelled 'forget' to the right-hand side. The content has an heading followed by a two paragraphs of dummy text. The footer reads 'Copyright nobody. Use the code as you like'.](web-storage-demo.png)

Let's build up the example, so you can understand how it works.

1. First, make a local copy of our [personal-greeting.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/web-storage/personal-greeting.html) file in a new directory on your computer.
2. Next, note how our HTML references a JavaScript file called `index.js`, with a line like `<script src="index.js" defer></script>`. We need to create this and write our JavaScript code into it. Create an `index.js` file in the same directory as your HTML file.
3. We'll start off by creating references to all the HTML features we need to manipulate in this example — we'll create them all as constants, as these references do not need to change in the lifecycle of the app. Add the following lines to your JavaScript file:

   ```js
   // create needed constants
   const rememberDiv = document.querySelector(".remember");
   const forgetDiv = document.querySelector(".forget");
   const form = document.querySelector("form");
   const nameInput = document.querySelector("#entername");
   const submitBtn = document.querySelector("#submitname");
   const forgetBtn = document.querySelector("#forgetname");

   const h1 = document.querySelector("h1");
   const personalGreeting = document.querySelector(".personal-greeting");
   ```

4. Next up, we need to include a small event listener to stop the form from actually submitting itself when the submit button is pressed, as this is not the behavior we want. Add this snippet below your previous code:

   ```js
   // Stop the form from submitting when a button is pressed
   form.addEventListener("submit", (e) => e.preventDefault());
   ```

5. Now we need to add an event listener, the handler function of which will run when the "Say hello" button is clicked. The comments explain in detail what each bit does, but in essence here we are taking the name the user has entered into the text input box and saving it in web storage using `setItem()`, then running a function called `nameDisplayCheck()` that will handle updating the actual website text. Add this to the bottom of your code:

   ```js
   // run function when the 'Say hello' button is clicked
   submitBtn.addEventListener("click", () => {
     // store the entered name in web storage
     localStorage.setItem("name", nameInput.value);
     // run nameDisplayCheck() to sort out displaying the personalized greetings and updating the form display
     nameDisplayCheck();
   });
   ```

6. At this point we also need an event handler to run a function when the "Forget" button is clicked — this is only displayed after the "Say hello" button has been clicked (the two form states toggle back and forth). In this function we remove the `name` item from web storage using `removeItem()`, then again run `nameDisplayCheck()` to update the display. Add this to the bottom:

   ```js
   // run function when the 'Forget' button is clicked
   forgetBtn.addEventListener("click", () => {
     // Remove the stored name from web storage
     localStorage.removeItem("name");
     // run nameDisplayCheck() to sort out displaying the generic greeting again and updating the form display
     nameDisplayCheck();
   });
   ```

7. It is now time to define the `nameDisplayCheck()` function itself. Here we check whether the name item has been stored in web storage by using `localStorage.getItem('name')` as a conditional test. If the name has been stored, this call will evaluate to `true`; if not, the call will evaluate to `false`. If the call evaluates to `true`, we display a personalized greeting, display the "forget" part of the form, and hide the "Say hello" part of the form. If the call evaluates to `false`, we display a generic greeting and do the opposite. Again, put the following code at the bottom:

   ```js
   // define the nameDisplayCheck() function
   function nameDisplayCheck() {
     // check whether the 'name' data item is stored in web Storage
     if (localStorage.getItem("name")) {
       // If it is, display personalized greeting
       const name = localStorage.getItem("name");
       h1.textContent = `Welcome, ${name}`;
       personalGreeting.textContent = `Welcome to our website, ${name}! We hope you have fun while you are here.`;
       // hide the 'remember' part of the form and show the 'forget' part
       forgetDiv.style.display = "block";
       rememberDiv.style.display = "none";
     } else {
       // if not, display generic greeting
       h1.textContent = "Welcome to our website ";
       personalGreeting.textContent =
         "Welcome to our website. We hope you have fun while you are here.";
       // hide the 'forget' part of the form and show the 'remember' part
       forgetDiv.style.display = "none";
       rememberDiv.style.display = "block";
     }
   }
   ```

8. Last but not least, we need to run the `nameDisplayCheck()` function when the page is loaded. If we don't do this, then the personalized greeting will not persist across page reloads. Add the following to the bottom of your code:

   ```js
   nameDisplayCheck();
   ```

Your example is finished — well done! All that remains now is to save your code and test your HTML page in a browser. You can see our [finished version running live here](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/web-storage/personal-greeting.html).

> **Note:** There is another, slightly more complex example to explore at [Using the Web Storage API](/ko/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API).

> **Note:** In the line `<script src="index.js" defer></script>` of the source for our finished version, the `defer` attribute specifies that the contents of the {{htmlelement("script")}} element will not execute until the page has finished loading.

## Storing complex data — IndexedDB

The [IndexedDB API](/ko/docs/Web/API/IndexedDB_API) (sometimes abbreviated IDB) is a complete database system available in the browser in which you can store complex related data, the types of which aren't limited to simple values like strings or numbers. You can store videos, images, and pretty much anything else in an IndexedDB instance.

The IndexedDB API allows you to create a database, then create object stores within that database.
Object stores are like tables in a relational database, and each object store can contain a number of objects.
To learn more about the IndexedDB API, see [Using IndexedDB](/ko/docs/Web/API/IndexedDB_API/Using_IndexedDB).

However, this does come at a cost: IndexedDB is much more complex to use than the Web Storage API. In this section, we'll really only scratch the surface of what it is capable of, but we will give you enough to get started.

### Working through a note storage example

Here we'll run you through an example that allows you to store notes in your browser and view and delete them whenever you like, getting you to build it up for yourself and explaining the most fundamental parts of IDB as we go along.

The app looks something like this:

![IndexDB notes demo screenshot with 4 sections. The first section is the header. The second section lists all the notes that have been created. It has two notes, each with a delete button. A third section is a form with 2 input fields for 'Note title' and 'Note text' and a button labeled 'Create new note'. The bottom section footer reads 'Copyright nobody. Use the code as you like'.](idb-demo.png)

Each note has a title and some body text, each individually editable. The JavaScript code we'll go through below has detailed comments to help you understand what's going on.

### Getting started

1. First of all, make local copies of our [`index.html`](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/indexeddb/notes/index.html), [`style.css`](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/indexeddb/notes/style.css), and [`index-start.js`](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/indexeddb/notes/index-start.js) files into a new directory on your local machine.
2. Have a look at the files. You'll see that the HTML defines a website with a header and footer, as well as a main content area that contains a place to display notes, and a form for entering new notes into the database. The CSS provides some styling to make it clearer what is going on. The JavaScript file contains five declared constants containing references to the {{htmlelement("ul")}} element the notes will be displayed in, the title and body {{htmlelement("input")}} elements, the {{htmlelement("form")}} itself, and the {{htmlelement("button")}}.
3. Rename your JavaScript file to `index.js`. You are now ready to start adding code to it.

### Database initial setup

Now let's look at what we have to do in the first place, to actually set up a database.

1. Below the constant declarations, add the following lines:

   ```js
   // Create an instance of a db object for us to store the open database in
   let db;
   ```

   Here we are declaring a variable called `db` — this will later be used to store an object representing our database. We will use this in a few places, so we've declared it globally here to make things easier.

2. Next, add the following:

   ```js
   // Open our database; it is created if it doesn't already exist
   // (see the upgradeneeded handler below)
   const openRequest = window.indexedDB.open("notes_db", 1);
   ```

   This line creates a request to open version `1` of a database called `notes_db`. If this doesn't already exist, it will be created for you by subsequent code. You will see this request pattern used very often throughout IndexedDB. Database operations take time. You don't want to hang the browser while you wait for the results, so database operations are {{Glossary("asynchronous")}}, meaning that instead of happening immediately, they will happen at some point in the future, and you get notified when they're done.

   To handle this in IndexedDB, you create a request object (which can be called anything you like — we called it `openRequest` here, so it is obvious what it is for). You then use event handlers to run code when the request completes, fails, etc., which you'll see in use below.

   > **Note:** The version number is important. If you want to upgrade your database (for example, by changing the table structure), you have to run your code again with an increased version number, different schema specified inside the `upgradeneeded` handler (see below), etc. We won't cover upgrading databases in this tutorial.

3. Now add the following event handlers just below your previous addition:

   ```js
   // error handler signifies that the database didn't open successfully
   openRequest.addEventListener("error", () =>
     console.error("Database failed to open"),
   );

   // success handler signifies that the database opened successfully
   openRequest.addEventListener("success", () => {
     console.log("Database opened successfully");

     // Store the opened database object in the db variable. This is used a lot below
     db = openRequest.result;

     // Run the displayData() function to display the notes already in the IDB
     displayData();
   });
   ```

   The {{domxref("IDBRequest/error_event", "error")}} event handler will run if the system comes back saying that the request failed. This allows you to respond to this problem. In our example, we just print a message to the JavaScript console.

   The {{domxref("IDBRequest/success_event", "success")}} event handler will run if the request returns successfully, meaning the database was successfully opened. If this is the case, an object representing the opened database becomes available in the {{domxref("IDBRequest.result", "openRequest.result")}} property, allowing us to manipulate the database. We store this in the `db` variable we created earlier for later use. We also run a function called `displayData()`, which displays the data in the database inside the {{HTMLElement("ul")}}. We run it now so that the notes already in the database are displayed as soon as the page loads. You'll see `displayData()` defined later on.

4. Finally for this section, we'll add probably the most important event handler for setting up the database: {{domxref("IDBOpenDBRequest/upgradeneeded_event", "upgradeneeded")}}. This handler runs if the database has not already been set up, or if the database is opened with a bigger version number than the existing stored database (when performing an upgrade). Add the following code, below your previous handler:

   ```js
   // Set up the database tables if this has not already been done
   openRequest.addEventListener("upgradeneeded", (e) => {
     // Grab a reference to the opened database
     db = e.target.result;

     // Create an objectStore in our database to store notes and an auto-incrementing key
     // An objectStore is similar to a 'table' in a relational database
     const objectStore = db.createObjectStore("notes_os", {
       keyPath: "id",
       autoIncrement: true,
     });

     // Define what data items the objectStore will contain
     objectStore.createIndex("title", "title", { unique: false });
     objectStore.createIndex("body", "body", { unique: false });

     console.log("Database setup complete");
   });
   ```

   This is where we define the schema (structure) of our database; that is, the set of columns (or fields) it contains. Here we first grab a reference to the existing database from the `result` property of the event's target (`e.target.result`), which is the `request` object. This is equivalent to the line `db = openRequest.result;` inside the `success` event handler, but we need to do this separately here because the `upgradeneeded` event handler (if needed) will run before the `success` event handler, meaning that the `db` value wouldn't be available if we didn't do this.

   We then use {{domxref("IDBDatabase.createObjectStore()")}} to create a new object store inside our opened database called `notes_os`. This is equivalent to a single table in a conventional database system. We've given it the name notes, and also specified an `autoIncrement` key field called `id` — in each new record this will automatically be given an incremented value — the developer doesn't need to set this explicitly. Being the key, the `id` field will be used to uniquely identify records, such as when deleting or displaying a record.

   We also create two other indexes (fields) using the {{domxref("IDBObjectStore.createIndex()")}} method: `title` (which will contain a title for each note), and `body` (which will contain the body text of the note).

So with this database schema set up, when we start adding records to the database, each one will be represented as an object along these lines:

```json
{
  "title": "Buy milk",
  "body": "Need both cows milk and soy.",
  "id": 8
}
```

### Adding data to the database

Now let's look at how we can add records to the database. This will be done using the form on our page.

Below your previous event handler, add the following line, which sets up a `submit` event handler that runs a function called `addData()` when the form is submitted (when the submit {{htmlelement("button")}} is pressed leading to a successful form submission):

```js
// Create a submit event handler so that when the form is submitted the addData() function is run
form.addEventListener("submit", addData);
```

Now let's define the `addData()` function. Add this below your previous line:

```js
// Define the addData() function
function addData(e) {
  // prevent default - we don't want the form to submit in the conventional way
  e.preventDefault();

  // grab the values entered into the form fields and store them in an object ready for being inserted into the DB
  const newItem = { title: titleInput.value, body: bodyInput.value };

  // open a read/write db transaction, ready for adding the data
  const transaction = db.transaction(["notes_os"], "readwrite");

  // call an object store that's already been added to the database
  const objectStore = transaction.objectStore("notes_os");

  // Make a request to add our newItem object to the object store
  const addRequest = objectStore.add(newItem);

  addRequest.addEventListener("success", () => {
    // Clear the form, ready for adding the next entry
    titleInput.value = "";
    bodyInput.value = "";
  });

  // Report on the success of the transaction completing, when everything is done
  transaction.addEventListener("complete", () => {
    console.log("Transaction completed: database modification finished.");

    // update the display of data to show the newly added item, by running displayData() again.
    displayData();
  });

  transaction.addEventListener("error", () =>
    console.log("Transaction not opened due to error"),
  );
}
```

This is quite complex; breaking it down, we:

- Run {{domxref("Event.preventDefault()")}} on the event object to stop the form actually submitting in the conventional manner (this would cause a page refresh and spoil the experience).
- Create an object representing a record to enter into the database, populating it with values from the form inputs. Note that we don't have to explicitly include an `id` value — as we explained earlier, this is auto-populated.
- Open a `readwrite` transaction against the `notes_os` object store using the {{domxref("IDBDatabase.transaction()")}} method. This transaction object allows us to access the object store so we can do something to it, e.g. add a new record.
- Access the object store using the {{domxref("IDBTransaction.objectStore()")}} method, saving the result in the `objectStore` variable.
- Add the new record to the database using {{domxref("IDBObjectStore.add()")}}. This creates a request object, in the same fashion as we've seen before.
- Add a bunch of event handlers to the `request` and the `transaction` objects to run code at critical points in the lifecycle. Once the request has succeeded, we clear the form inputs ready for entering the next note. Once the transaction has completed, we run the `displayData()` function again to update the display of notes on the page.

### Displaying the data

We've referenced `displayData()` twice in our code already, so we'd probably better define it. Add this to your code, below the previous function definition:

```js
// Define the displayData() function
function displayData() {
  // Here we empty the contents of the list element each time the display is updated
  // If you didn't do this, you'd get duplicates listed each time a new note is added
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }

  // Open our object store and then get a cursor - which iterates through all the
  // different data items in the store
  const objectStore = db.transaction("notes_os").objectStore("notes_os");
  objectStore.openCursor().addEventListener("success", (e) => {
    // Get a reference to the cursor
    const cursor = e.target.result;

    // If there is still another data item to iterate through, keep running this code
    if (cursor) {
      // Create a list item, h3, and p to put each data item inside when displaying it
      // structure the HTML fragment, and append it inside the list
      const listItem = document.createElement("li");
      const h3 = document.createElement("h3");
      const para = document.createElement("p");

      listItem.appendChild(h3);
      listItem.appendChild(para);
      list.appendChild(listItem);

      // Put the data from the cursor inside the h3 and para
      h3.textContent = cursor.value.title;
      para.textContent = cursor.value.body;

      // Store the ID of the data item inside an attribute on the listItem, so we know
      // which item it corresponds to. This will be useful later when we want to delete items
      listItem.setAttribute("data-note-id", cursor.value.id);

      // Create a button and place it inside each listItem
      const deleteBtn = document.createElement("button");
      listItem.appendChild(deleteBtn);
      deleteBtn.textContent = "Delete";

      // Set an event handler so that when the button is clicked, the deleteItem()
      // function is run
      deleteBtn.addEventListener("click", deleteItem);

      // Iterate to the next item in the cursor
      cursor.continue();
    } else {
      // Again, if list item is empty, display a 'No notes stored' message
      if (!list.firstChild) {
        const listItem = document.createElement("li");
        listItem.textContent = "No notes stored.";
        list.appendChild(listItem);
      }
      // if there are no more cursor items to iterate through, say so
      console.log("Notes all displayed");
    }
  });
}
```

Again, let's break this down:

- First, we empty out the {{htmlelement("ul")}} element's content, before then filling it with the updated content. If you didn't do this, you'd end up with a huge list of duplicated content being added to with each update.
- Next, we get a reference to the `notes_os` object store using {{domxref("IDBDatabase.transaction()")}} and {{domxref("IDBTransaction.objectStore()")}} like we did in `addData()`, except here we are chaining them together in one line.
- The next step is to use the {{domxref("IDBObjectStore.openCursor()")}} method to open a request for a cursor — this is a construct that can be used to iterate over the records in an object store. We chain a `success` event handler onto the end of this line to make the code more concise — when the cursor is successfully returned, the handler is run.
- We get a reference to the cursor itself (an {{domxref("IDBCursor")}} object) using `const cursor = e.target.result`.
- Next, we check to see if the cursor contains a record from the datastore (`if (cursor){ }`) — if so, we create a DOM fragment, populate it with the data from the record, and insert it into the page (inside the `<ul>` element). We also include a delete button that, when clicked, will delete that note by running the `deleteItem()` function, which we will look at in the next section.
- At the end of the `if` block, we use the {{domxref("IDBCursor.continue()")}} method to advance the cursor to the next record in the datastore, and run the content of the `if` block again. If there is another record to iterate to, this causes it to be inserted into the page, and then `continue()` is run again, and so on.
- When there are no more records to iterate over, `cursor` will return `undefined`, and therefore the `else` block will run instead of the `if` block. This block checks whether any notes were inserted into the `<ul>` — if not, it inserts a message to say no note was stored.

### Deleting a note

As stated above, when a note's delete button is pressed, the note is deleted. This is achieved by the `deleteItem()` function, which looks like so:

```js
// Define the deleteItem() function
function deleteItem(e) {
  // retrieve the name of the task we want to delete. We need
  // to convert it to a number before trying to use it with IDB; IDB key
  // values are type-sensitive.
  const noteId = Number(e.target.parentNode.getAttribute("data-note-id"));

  // open a database transaction and delete the task, finding it using the id we retrieved above
  const transaction = db.transaction(["notes_os"], "readwrite");
  const objectStore = transaction.objectStore("notes_os");
  const deleteRequest = objectStore.delete(noteId);

  // report that the data item has been deleted
  transaction.addEventListener("complete", () => {
    // delete the parent of the button
    // which is the list item, so it is no longer displayed
    e.target.parentNode.parentNode.removeChild(e.target.parentNode);
    console.log(`Note ${noteId} deleted.`);

    // Again, if list item is empty, display a 'No notes stored' message
    if (!list.firstChild) {
      const listItem = document.createElement("li");
      listItem.textContent = "No notes stored.";
      list.appendChild(listItem);
    }
  });
}
```

- The first part of this could use some explaining — we retrieve the ID of the record to be deleted using `Number(e.target.parentNode.getAttribute('data-note-id'))` — recall that the ID of the record was saved in a `data-note-id` attribute on the `<li>` when it was first displayed. We do however need to pass the attribute through the global built-in [`Number()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Number) object as it is of datatype string, and therefore wouldn't be recognized by the database, which expects a number.
- We then get a reference to the object store using the same pattern we've seen previously, and use the {{domxref("IDBObjectStore.delete()")}} method to delete the record from the database, passing it the ID.
- When the database transaction is complete, we delete the note's `<li>` from the DOM, and again do the check to see if the `<ul>` is now empty, inserting a note as appropriate.

So that's it! Your example should now work.

If you are having trouble with it, feel free to [check it against our live example](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/indexeddb/notes/) (see the [source code](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/indexeddb/notes/index.js) also).

### Storing complex data via IndexedDB

As we mentioned above, IndexedDB can be used to store more than just text strings. You can store just about anything you want, including complex objects such as video or image blobs. And it isn't much more difficult to achieve than any other type of data.

To demonstrate how to do it, we've written another example called [IndexedDB video store](https://github.com/mdn/learning-area/tree/main/javascript/apis/client-side-storage/indexeddb/video-store) (see it [running live here also](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/indexeddb/video-store/)). When you first run the example, it downloads all the videos from the network, stores them in an IndexedDB database, and then displays the videos in the UI inside {{htmlelement("video")}} elements. The second time you run it, it finds the videos in the database and gets them from there instead before displaying them — this makes subsequent loads much quicker and less bandwidth-hungry.

Let's walk through the most interesting parts of the example. We won't look at it all — a lot of it is similar to the previous example, and the code is well-commented.

1. For this example, we've stored the names of the videos to fetch in an array of objects:

   ```js
   const videos = [
     { name: "crystal" },
     { name: "elf" },
     { name: "frog" },
     { name: "monster" },
     { name: "pig" },
     { name: "rabbit" },
   ];
   ```

2. To start with, once the database is successfully opened we run an `init()` function. This loops through the different video names, trying to load a record identified by each name from the `videos` database.

   If each video is found in the database (checked by seeing whether `request.result` evaluates to `true` — if the record is not present, it will be `undefined`), its video files (stored as blobs) and the video name are passed straight to the `displayVideo()` function to place them in the UI. If not, the video name is passed to the `fetchVideoFromNetwork()` function to, you guessed it, fetch the video from the network.

   ```js
   function init() {
     // Loop through the video names one by one
     for (const video of videos) {
       // Open transaction, get object store, and get() each video by name
       const objectStore = db.transaction("videos_os").objectStore("videos_os");
       const request = objectStore.get(video.name);
       request.addEventListener("success", () => {
         // If the result exists in the database (is not undefined)
         if (request.result) {
           // Grab the videos from IDB and display them using displayVideo()
           console.log("taking videos from IDB");
           displayVideo(
             request.result.mp4,
             request.result.webm,
             request.result.name,
           );
         } else {
           // Fetch the videos from the network
           fetchVideoFromNetwork(video);
         }
       });
     }
   }
   ```

3. The following snippet is taken from inside `fetchVideoFromNetwork()` — here we fetch MP4 and WebM versions of the video using two separate {{domxref("fetch()")}} requests. We then use the {{domxref("Response.blob()")}} method to extract each response's body as a blob, giving us an object representation of the videos that can be stored and displayed later on.

   We have a problem here though — these two requests are both asynchronous, but we only want to try to display or store the video when both promises have fulfilled. Fortunately there is a built-in method that handles such a problem — {{jsxref("Promise.all()")}}. This takes one argument — references to all the individual promises you want to check for fulfillment placed in an array — and returns a promise which is fulfilled when all the individual promises are fulfilled.

   Inside the `then()` handler for this promise, we call the `displayVideo()` function like we did before to display the videos in the UI, then we also call the `storeVideo()` function to store those videos inside the database.

   ```js
   // Fetch the MP4 and WebM versions of the video using the fetch() function,
   // then expose their response bodies as blobs
   const mp4Blob = fetch(`videos/${video.name}.mp4`).then((response) =>
     response.blob(),
   );
   const webmBlob = fetch(`videos/${video.name}.webm`).then((response) =>
     response.blob(),
   );

   // Only run the next code when both promises have fulfilled
   Promise.all([mp4Blob, webmBlob]).then((values) => {
     // display the video fetched from the network with displayVideo()
     displayVideo(values[0], values[1], video.name);
     // store it in the IDB using storeVideo()
     storeVideo(values[0], values[1], video.name);
   });
   ```

4. Let's look at `storeVideo()` first. This is very similar to the pattern you saw in the previous example for adding data to the database — we open a `readwrite` transaction and get a reference to our `videos_os` object store, create an object representing the record to add to the database, then add it using {{domxref("IDBObjectStore.add()")}}.

   ```js
   // Define the storeVideo() function
   function storeVideo(mp4, webm, name) {
     // Open transaction, get object store; make it a readwrite so we can write to the IDB
     const objectStore = db
       .transaction(["videos_os"], "readwrite")
       .objectStore("videos_os");

     // Add the record to the IDB using add()
     const request = objectStore.add({ mp4, webm, name });

     request.addEventListener("success", () =>
       console.log("Record addition attempt finished"),
     );
     request.addEventListener("error", () => console.error(request.error));
   }
   ```

5. Finally, we have `displayVideo()`, which creates the DOM elements needed to insert the video in the UI and then appends them to the page. The most interesting parts of this are those shown below — to actually display our video blobs in a `<video>` element, we need to create object URLs (internal URLs that point to the video blobs stored in memory) using the {{domxref("URL.createObjectURL()")}} method. Once that is done, we can set the object URLs to be the values of our {{htmlelement("source")}} element's `src` attributes, and it works fine.

   ```js
   // Define the displayVideo() function
   function displayVideo(mp4Blob, webmBlob, title) {
     // Create object URLs out of the blobs
     const mp4URL = URL.createObjectURL(mp4Blob);
     const webmURL = URL.createObjectURL(webmBlob);

     // Create DOM elements to embed video in the page
     const article = document.createElement("article");
     const h2 = document.createElement("h2");
     h2.textContent = title;
     const video = document.createElement("video");
     video.controls = true;
     const source1 = document.createElement("source");
     source1.src = mp4URL;
     source1.type = "video/mp4";
     const source2 = document.createElement("source");
     source2.src = webmURL;
     source2.type = "video/webm";

     // Embed DOM elements into page
     section.appendChild(article);
     article.appendChild(h2);
     article.appendChild(video);
     video.appendChild(source1);
     video.appendChild(source2);
   }
   ```

## Offline asset storage

The above example already shows how to create an app that will store large assets in an IndexedDB database, avoiding the need to download them more than once. This is already a great improvement to the user experience, but there is still one thing missing — the main HTML, CSS, and JavaScript files still need to be downloaded each time the site is accessed, meaning that it won't work when there is no network connection.

![Firefox offline screen with an illustration of a cartoon character to the left-hand side holding a two-pin plug in its right hand and a two-pin socket in its left hand. On the right-hand side there is an Offline Mode message and a button labeled 'Try again'.](ff-offline.png)

This is where [Service workers](/ko/docs/Web/API/Service_Worker_API) and the closely-related [Cache API](/ko/docs/Web/API/Cache) come in.

A service worker is a JavaScript file that is registered against a particular origin (website, or part of a website at a certain domain) when it is accessed by a browser. When registered, it can control pages available at that origin. It does this by sitting between a loaded page and the network and intercepting network requests aimed at that origin.

When it intercepts a request, it can do anything you wish to it (see [use case ideas](/ko/docs/Web/API/Service_Worker_API#other_use_case_ideas)), but the classic example is saving the network responses offline and then providing those in response to a request instead of the responses from the network. In effect, it allows you to make a website work completely offline.

The Cache API is another client-side storage mechanism, with a bit of a difference — it is designed to save HTTP responses, and so works very well with service workers.

### A service worker example

Let's look at an example, to give you a bit of an idea of what this might look like. We have created another version of the video store example we saw in the previous section — this functions identically, except that it also saves the HTML, CSS, and JavaScript in the Cache API via a service worker, allowing the example to run offline!

See [IndexedDB video store with service worker running live](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/), and also [see the source code](https://github.com/mdn/learning-area/tree/main/javascript/apis/client-side-storage/cache-sw/video-store-offline).

#### Registering the service worker

The first thing to note is that there's an extra bit of code placed in the main JavaScript file (see [index.js](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/cache-sw/video-store-offline/index.js)). First, we do a feature detection test to see if the `serviceWorker` member is available in the {{domxref("Navigator")}} object. If this returns true, then we know that at least the basics of service workers are supported. Inside here we use the {{domxref("ServiceWorkerContainer.register()")}} method to register a service worker contained in the `sw.js` file against the origin it resides at, so it can control pages in the same directory as it, or subdirectories. When its promise fulfills, the service worker is deemed registered.

```js
// Register service worker to control making site work offline
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register(
      "/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/sw.js",
    )
    .then(() => console.log("Service Worker Registered"));
}
```

> **Note:** The given path to the `sw.js` file is relative to the site origin, not the JavaScript file that contains the code. The service worker is at `https://mdn.github.io/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/sw.js`. The origin is `https://mdn.github.io`, and therefore the given path has to be `/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/sw.js`. If you wanted to host this example on your own server, you'd have to change this accordingly. This is rather confusing, but it has to work this way for security reasons.

#### Installing the service worker

The next time any page under the service worker's control is accessed (e.g. when the example is reloaded), the service worker is installed against that page, meaning that it will start controlling it. When this occurs, an `install` event is fired against the service worker; you can write code inside the service worker itself that will respond to the installation.

Let's look at an example, in the [sw.js](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/cache-sw/video-store-offline/sw.js) file (the service worker). You'll see that the install listener is registered against `self`. This `self` keyword is a way to refer to the global scope of the service worker from inside the service worker file.

Inside the `install` handler, we use the {{domxref("ExtendableEvent.waitUntil()")}} method, available on the event object, to signal that the browser shouldn't complete installation of the service worker until after the promise inside it has fulfilled successfully.

Here is where we see the Cache API in action. We use the {{domxref("CacheStorage.open()")}} method to open a new cache object in which responses can be stored (similar to an IndexedDB object store). This promise fulfills with a {{domxref("Cache")}} object representing the `video-store` cache. We then use the {{domxref("Cache.addAll()")}} method to fetch a series of assets and add their responses to the cache.

```js
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open("video-store")
      .then((cache) =>
        cache.addAll([
          "/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/",
          "/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/index.html",
          "/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/index.js",
          "/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/style.css",
        ]),
      ),
  );
});
```

That's it for now, installation done.

#### Responding to further requests

With the service worker registered and installed against our HTML page, and the relevant assets all added to our cache, we are nearly ready to go. There is only one more thing to do: write some code to respond to further network requests.

This is what the second bit of code in `sw.js` does. We add another listener to the service worker global scope, which runs the handler function when the `fetch` event is raised. This happens whenever the browser makes a request for an asset in the directory the service worker is registered against.

Inside the handler, we first log the URL of the requested asset. We then provide a custom response to the request, using the {{domxref("FetchEvent.respondWith()")}} method.

Inside this block, we use {{domxref("CacheStorage.match()")}} to check whether a matching request (i.e. matches the URL) can be found in any cache. This promise fulfills with the matching response if a match is found, or `undefined` if it isn't.

If a match is found, we return it as the custom response. If not, we [fetch()](/ko/docs/Web/API/fetch) the response from the network and return that instead.

```js
self.addEventListener("fetch", (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
```

And that is it for our service worker.
There is a whole load more you can do with them — for a lot more detail, see the [service worker cookbook](https://github.com/mdn/serviceworker-cookbook).
Many thanks to Paul Kinlan for his article [Adding a Service Worker and Offline into your Web App](https://developers.google.com/codelabs/pwa-training/pwa03--going-offline#0), which inspired this example.

#### Testing the example offline

To test our [service worker example](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/), you'll need to load it a couple of times to make sure it is installed. Once this is done, you can:

- Try unplugging your network/turning your Wi-Fi off.
- Select _File > Work Offline_ if you are using Firefox.
- Go to the devtools, then choose _Application > Service Workers_, then check the _Offline_ checkbox if you are using Chrome.

If you refresh your example page again, you should still see it load just fine. Everything is stored offline — the page assets in a cache, and the videos in an IndexedDB database.

## Summary

That's it for now. We hope you've found our rundown of client-side storage technologies useful.

## See also

- [Web storage API](/ko/docs/Web/API/Web_Storage_API)
- [IndexedDB API](/ko/docs/Web/API/IndexedDB_API)
- [Cookies](/ko/docs/Web/HTTP/Cookies)
- [Service worker API](/ko/docs/Web/API/Service_Worker_API)

{{PreviousMenu("Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs", "Learn/JavaScript/Client-side_web_APIs")}}

## In this module

- [Introduction to web APIs](/ko/docs/Learn/JavaScript/Client-side_web_APIs/Introduction)
- [Manipulating documents](/ko/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)
- [Fetching data from the server](/ko/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data)
- [Third party APIs](/ko/docs/Learn/JavaScript/Client-side_web_APIs/Third_party_APIs)
- [Drawing graphics](/ko/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics)
- [Video and audio APIs](/ko/docs/Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs)
- **Client-side storage**

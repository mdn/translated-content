---
title: Checking when a deadline is due
slug: Web/API/IndexedDB_API/Checking_when_a_deadline_is_due
---

{{DefaultAPISidebar("IndexedDB")}}

在本文中，我们将看一个复杂的示例，该示例涉及根据 IndexedDB 存储的截止日期检查当前时间和日期。这里的主要复杂因素是检查存储的截止日期信息（月，小时，日等）与 Date 对象的当前时间和日期。

![A screenshot of the sample app. A red main title saying To do app, a test to-do item, and a red form for users to enter new tasks](to-do-app.png)

The main example application we will be referring to in this article is **To-do list notifications**, a simple to-do list application that stores task titles and deadline times and dates via [IndexedDB](/zh-CN/docs/Web/API/IndexedDB_API), and then provides users with notifications when deadline dates are reached, via the [Notification](/zh-CN/docs/Web/API/notification), and [Vibration](/zh-CN/docs/Web/Guide/API/Vibration) APIs. You can [download the To-do list notifications app from github](https://github.com/chrisdavidmills/to-do-notifications/tree/gh-pages) and play around with the source code, or [view the app running live](https://mdn.github.io/dom-examples/to-do-notifications/).

## 基本问题

在待办事项应用程序中，我们希望首先以显示时机器可读和人类可理解的格式记录时间和日期信息，然后检查每个时间和日期是否在当前时刻发生。基本上，我们想要检查现在的时间和日期，然后检查每个存储的事件，看看他们的截止日期是否与当前时间和日期相匹配。如果他们这样做，我们希望通过某种通知让用户知道。

This would be easy if we were just comparing two {{jsxref("Global_Objects/Date", "Date")}} objects, but of course humans don't want to enter deadline information in the same format JavaScript understands. Human-readable dates are quite different, with a number of different representations.

### Recording the date information

为了在移动设备上提供合理的用户体验，并减少歧义，我决定创建一个 HTML 表单：

![The form of the to-do app, containing fields to fill in a task title, and minute, hour, day, month and year values for the deadline.](to-do-app-form2.png)

- 用于输入待办事项列表标题的文本输入。这是用户输入中最不可避免的一点。
- Number inputs for the hour and minute parts of the deadline. On browsers that support `type="number"`, you get a nice little up and down arrow number picker. On mobile platforms you tend to get a numeric keypad for entering data, which is helpful. On others you just get a standard text input, which is okay.
- {{HTMLElement("select")}} 是用于输入截止日期的日期，月份和年份的元素。因为这些值对于用户来说是最模糊的（7，星期日，太阳？04,4，4 月，4 月？2013，'13，13？），我认为最好的解决方案是给他们一个选择，这也为移动用户节省了恼人的打字。日期记录为月份的数字天数，月份记录为完整月份名称，年份记录为完整的四位数年份数字

当我们点击 submit 按钮是，将会运行函数 `addData()` , 示例：

```js
function addData(e) {
  e.preventDefault();

  if(title.value == '' || hours.value == null || minutes.value == null || day.value == '' || month.value == '' || year.value == null) {
    note.innerHTML += '<li>Data not submitted — form incomplete.</li>';
    return;
  }
```

In this segment, we check to see if the form fields have all been filled in. If not, we drop a message into our developer notifications pane (see the bottom left of the app UI) to tell the user what is going on, and exit out of the function. This step is mainly for browsers that don't support HTML form validation (I have used the `required` attribute in my HTML to force validation, in those that do.)

```js
   else {
    var newItem = [
      {
        taskTitle: title.value,
        hours    : hours.value,
        minutes  : minutes.value,
        day      : day.value,
        month    : month.value,
        year     : year.value,
        notified : "no"
      }
    ];

    // open a read/write db transaction, ready for adding the data
    var transaction = db.transaction(["toDoList"], "readwrite");

    // report on the success of opening the transaction
    transaction.oncomplete = function(event) {
      note.innerHTML += '<li>Transaction opened for task addition.</li>';
    };

    transaction.onerror = function(event) {
      note.innerHTML += '<li>Transaction not opened due to error. Duplicate items not allowed.</li>';
    };

    // create an object store on the transaction
    var objectStore = transaction.objectStore("toDoList");

    // add our newItem object to the object store
    var request = objectStore.add(newItem[0]);
```

In this section we create an object called `newItem` that stores the data in the format required to insert it into the database. The next few lines open the database transaction and provide messages to notify the user if this was successful or failed.Then an `objectStore` is created into which the new item is added. The `notified` property of the data object indicates that the to-do list item's deadline has not yet come up and been notified - more on this later!

> **备注：** The `db` variable stores a reference to the IndexedDB database instance; we can then use various properties of this variable to manipulate the data.

```js
    request.onsuccess = function(event) {

      note.innerHTML += '<li>New item added to database.</li>';

      title.value = '';
      hours.value = null;
      minutes.value = null;
      day.value = 01;
      month.value = 'January';
      year.value = 2020;
    };
  }
```

下一节将创建一条日志消息，说明新项目添加成功，并重置表单，以便为下一个任务输入做好准备。

```js
  // update the display of data to show the newly added item, by running displayData() again.
  displayData();
};
```

Last of all, we run the `displayData()` function, which updates the display of data in the app to show the new task that was just entered.

### Checking whether a deadline has been reached

At this point our data is in the database; now we want to check whether any of the the deadlines have been reached. This is done by our `checkDeadlines()` function:

```js
function checkDeadlines() {
  var now = new Date();
```

First we grab the current date and time by creating a blank `Date` object. Easy huh? It's about to get a bit more complex.

```js
var minuteCheck = now.getMinutes();
var hourCheck = now.getHours();
var dayCheck = now.getDate();
var monthCheck = now.getMonth();
var yearCheck = now.getFullYear();
```

The `Date` object has a number of methods to extract various parts of the date and time inside it. Here we fetch the current minutes (gives an easy numerical value), hours (gives an easy numerical value), day of the month (`getDate()` is needed for this, as `getDay()` returns the day of the week, 1-7), month (returns a number from 0-11, see below), and year (`getFullYear()` is needed; `getYear()` is deprecated, and returns a weird value that is not much use to anyone!)

```js
   var objectStore = db.transaction(['toDoList'], "readwrite").objectStore('toDoList');

  objectStore.openCursor().onsuccess = function(event) {
    var cursor = event.target.result;

    if(cursor) {
```

Next we create another IndexedDB `objectStore`, and use the `openCursor()` method to open a cursor, which is basically a way in IndexedDB to iterate through all the items in the store. We then loop through all the items in the cursor for as long as there is a valid item left in the cursor.

```js
switch (cursor.value.month) {
  case "January":
    var monthNumber = 0;
    break;
  case "February":
    var monthNumber = 1;
    break;

  // other lines removed from listing for brevity

  case "December":
    var monthNumber = 11;
    break;
  default:
    alert("Incorrect month entered in database.");
}
```

我们要做的第一件事是将我们存储在数据库中的月份名称转换为 JavaScript 将理解的月份号码。如前所述，JavaScript Date 对象将月份值创建为 0 到 11 之间的数字。

```js
if (
  +cursor.value.hours == hourCheck &&
  +cursor.value.minutes == minuteCheck &&
  +cursor.value.day == dayCheck &&
  monthNumber == monthCheck &&
  cursor.value.year == yearCheck &&
  notified == "no"
) {
  // If the numbers all do match, run the createNotification()
  // function to create a system notification
  createNotification(cursor.value.taskTitle);
}
```

With the current time and date segments that we want to check against the IndexedDB stored values all assembled, it is time to perform the checks. We want all the values to match before we show the user some kind of notification to tell them their deadline is up.

The `+` operator in this case converts numbers with leading zeros into their non leading zero equivalents, e.g. 09 -> 9. This is needed because JavaScript `Date` number values never have leading zeros, but our data might.

The `notified == "no"` check is designed to make sure you will only get one notification per to-do item. When a notification is fired for each item object, its `notification` property is set to `"yes"` so this check will not pass on the next iteration, via the following code inside the `createNotification()` function (read [Using IndexedDB](/zh-CN/docs/Web/API/IndexedDB_API/Using_IndexedDB) for an explanation):

```js
    // now we need to update the value of notified to "yes" in this particular data object, so the
    // notification won't be set off on it again

    // first open up a tranaction as usual
    var objectStore = db.transaction(['toDoList'], "readwrite").objectStore('toDoList');

    // get the to-do list object that has this title as it's title
    var request = objectStore.get(title);

    request.onsuccess = function() {
      // grab the data object returned as the result
      var data = request.result;

      // update the notified value in the object to "yes"
      data.notified = "yes";

      // create another request that inserts the item back into the database
      var requestUpdate = objectStore.put(data);

      // when this new request succeeds, run the displayData() function again to update the display
      requestUpdate.onsuccess = function() {
        displayData();
      }
```

If the checks all match, we then run the `createNotification()` function to provide a notification to the user.

```js
       cursor.continue();
    }
  }
}
```

该函数的最后一行将光标移开，这导致上述截止日期检查机制为存储在 IndexedDB 中的下一个任务运行。

### Keep on checking!

Of course, it is no use to just run the above deadline checking function once! We want to keep constantly checking all the deadlines to see if any of them are being reached. To do this, we are simply using `setInterval()` to run `checkDeadlines()` once per second:

```js
setInterval(checkDeadlines, 1000);
```

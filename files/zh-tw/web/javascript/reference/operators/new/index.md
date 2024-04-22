---
title: 建構子函數的使用
slug: Web/JavaScript/Reference/Operators/new
---

{{jsSidebar("Operators")}}

還有一個選擇，你可以按照這兩個步驟來建立物件︰

1. 編寫建構子函數以完成物件類型的定義。
2. 使用 new 建立物件的實體。

若要定義物件類型，就指定物件類型的名稱、屬性、方法並建立函數。舉例來說，假設你想要給 car 建立物件類型。你希望這個物件的類型稱作 `car`，而且你還希望他有 make、model、year 這些屬性。要做到這些，你需要編寫出以下的函數︰

```js
function car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
```

注意 `this` 是用來把傳送給函數的值代入給物件的屬性。

現在你可以建立稱作 `mycar` 的物件如下所示︰

```js
mycar = new car("Eagle", "Talon TSi", 1993);
```

這個語句建立 `mycar` 並且把指定的值代入給他自己的屬性。然後 `mycar.make` 的值是字串 "Eagle"，`mycar.year` 是整數 1993，依此類推。

你可以藉由呼叫 `new` 來建立許多個 `car` 的物件。例如，

```js
kenscar = new car("Nissan", "300ZX", 1992);
vpgscar = new car("Mazda", "Miata", 1990);
```

物件可以有另一個物件本身的屬性。例如，假設你定義稱為 `person` 的物件如下︰

```js
function person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}
```

然後實體化兩個新的 person 物件如下︰

```js
rand = new person("Rand McKinnon", 33, "M");
ken = new person("Ken Jones", 39, "M");
```

然後你可以改寫 car 的定義，加入用來接受 `person` 物件的 owner 屬性，如下︰

```js
function car(make, model, year, owner) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.owner = owner;
}
```

若要實體化新的物件，你可以如下使用︰

```js
car1 = new car("Eagle", "Talon TSi", 1993, rand);
car2 = new car("Nissan", "300ZX", 1992, ken);
```

注意，當建立新的物件的時候，傳入的並不是字面表達字串或整數值，上面的語句把 `rand` 和 `ken` 物件當作參數傳給 owners。然後如果你希望找出 car2 的 owner 的名稱，你可以如下存取屬性︰

```js-nolint
car2.owner.name
```

注意，你永遠可以給之前定義的物件加入屬性。例如，語句

```js
car1.color = "black";
```

把 `color` 屬性加入給 car1，並且把 "black" 的值代入給新加入的屬性。然而，這樣並不能影響到其他的任何物件。若要給所有同樣類型的物件加入新的屬性，你必須把新的屬性加入到 car 物件類型的定義。

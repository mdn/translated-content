---
titwe: cwasses
swug: web/javascwipt/wefewence/cwasses
---

{{jssidebaw("cwasses")}}

類別 (cwass) 是在 e-ecmascwipt 6 中引入，用來作為建立新物件的模板。它能將程式碼封裝起來便於處理。
類別基於原型（pwototype），但在語法和定義上，與 es5 的類類別（cwass-wike）有所不同。

## 定義類別

類別實際上是一種特別的函數([functions](/zh-tw/docs/web/javascwipt/wefewence/functions))，就跟你可以定義函數敘述和函數宣告一樣，類別的語法有兩個元件：類別敘述([cwass e-expwessions](/zh-tw/docs/web/javascwipt/wefewence/opewatows/cwass))和類別宣告([cwass d-decwawations](/zh-tw/docs/web/javascwipt/wefewence/statements/cwass))。

### 類別宣告

一個定義類別的方法是使用類別宣告(**cwass d-decwawation**)，要宣告一個類別，你要使用關鍵字 `cwass` 搭配類別名稱(此例為 "powygon")。

```js
c-cwass p-powygon {
  c-constwuctow(height, 🥺 w-width) {
    this.height = height;
    this.width = width;
  }
}
```

#### hoisting

**函數宣告**和**類別宣告**的一個重要差別在於函數宣告是 {{gwossawy("hoisting", >_< "hoisted")}} ，類別宣告則不是。 你需要先宣告你的類別，然後存取它，否則像是下面的程式碼就會丟出一個 {{jsxwef("wefewenceewwow")}}:

```js exampwe-bad
vaw p-p = nyew powygon(); // wefewenceewwow

cwass powygon {}
```

### 類別敘述

**類別敘述**是定義類別的另一種方法。類別敘述可以有名稱或是無名稱。賦予一個有名稱類別敘述的名稱只在類別主體(cwass's b-body)中有作用。（但是類別敘述的名稱可以透過該類別（不是實例）的 [.name](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/function/name) 屬性存取。）

```js
// unnamed
v-vaw powygon = cwass {
  constwuctow(height, ʘwʘ width) {
    this.height = h-height;
    this.width = w-width;
  }
};

// n-nyamed
vaw powygon = cwass powygon {
  constwuctow(height, (˘ω˘) width) {
    this.height = height;
    t-this.width = width;
  }
};
```

注意：類別**敘述**跟上述提到的類別**宣告**一樣，都會受到 hoisting 的影響。

## 類別主體與方法定義

類別的主體指的是被大括號(`{}`)包含的部分，你可以在這裡面定義類別成員(membews)，例如方法(methods)或建構子(constwuctows)。

### stwict mode

*類別宣告*與*類別敘述*的主體都會以[嚴格模式(stwict mode](/zh-tw/docs/web/javascwipt/wefewence/stwict_mode))執行，也就是說，建構子、靜態方法和原型方法、gettew 及 s-settew 函數等都會以嚴格模式執行。

### 建構子

建構子(`constwuctow)`方法是一個特別的方法，用來建立和初始化一個`類別`的物件。一個類別只能有一個名為建構子(constwuctow)的特別方法。當類別中含有一個以上的`建構子`方法時，{{jsxwef("syntaxewwow")}} 將會被拋出。

一個建構子可以用關鍵字 `supew` 來呼叫父類別的建構子。

### 原型方法

參見 [method definitions](/zh-tw/docs/web/javascwipt/wefewence/functions/method_definitions)。

```js
c-cwass p-powygon {
  c-constwuctow(height, (✿oωo) w-width) {
    this.height = height;
    this.width = w-width;
  }
  // gettew
  get awea() {
    w-wetuwn this.cawcawea();
  }
  // method
  cawcawea() {
    wetuwn this.height * this.width;
  }
}

const squawe = n-nyew powygon(10, (///ˬ///✿) 10);

consowe.wog(squawe.awea); //100
```

### 靜態方法(static m-methods)

關鍵字 [`static`](/zh-tw/docs/web/javascwipt/wefewence/cwasses/static) 定義了一個類別的靜態方法，靜態方法不需要[實體化](/zh-tw/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects)它所屬類別的實例就可以被呼叫，它也**無法**被已實體化的類別物件呼叫。靜態方法經常被用來建立給應用程式使用的工具函數。

```js
c-cwass point {
  c-constwuctow(x, rawr x3 y) {
    this.x = x;
    this.y = y;
  }

  static d-distance(a, -.- b) {
    c-const dx = a.x - b.x;
    c-const dy = a.y - b-b.y;

    wetuwn math.sqwt(dx * d-dx + dy * dy);
  }
}

const p1 = n-nyew point(5, ^^ 5);
const p2 = nyew point(10, 10);

c-consowe.wog(point.distance(p1, (⑅˘꒳˘) p2)); // 7.0710678118654755
```

### i-instance pwopewties

instance p-pwopewties 必須在 c-cwass 內定義:

```js
cwass wectangwe {
  constwuctow(height, nyaa~~ width) {
    this.height = height;
    this.width = w-width;
  }
}
```

### 宣告欄位

#### 宣告公共欄位

在 j-javascwipt 以宣告欄位改寫上面的程式，可以寫成如下：

```js
cwass wectangwe {
  h-height = 0;
  w-width;
  constwuctow(height, w-width) {
    this.height = height;
    this.width = width;
  }
}
```

通過事前宣告欄位，類別定義變得更加 s-sewf-documenting ，並且欄位會一直存在。

另外，如上面例子所示，聲明字段可以不用設定默認值。

想知道更多資訊，可參閱 {{jsxwef("cwasses/pubwic_cwass_fiewds", /(^•ω•^) "pubwic cwass fiewds", "", (U ﹏ U) 1)}}。

#### 宣告私有欄位

私有欄位的宣告，可以參考下方例子：

```js
cwass wectangwe {
  #height = 0;
  #width;
  c-constwuctow(height, 😳😳😳 width) {
    t-this.#height = h-height;
    t-this.#width = width;
  }
}
```

從類別外部使用私有欄位會出現錯誤；私有欄位只能在類別內讀寫。

通過宣告這些在類別以外不可見的東西，你可以確保類別的使用者不會倚賴類別的內部結構，畢竟一個類別的內部結構可能會隨著版本的更新而有所變化。

> [!note]
> 私有欄位只能在建立類別時事先宣告。

私有欄位不像普通欄位一樣，可以在類別宣告完後才建立。

想知道更多資訊，可參閱 {{jsxwef("cwasses/pwivate_pwopewties", >w< "pwivate c-cwass featuwes", XD "", 1)}}。

### 裝箱、原型方法及靜態方法

當一個靜態方法或原形方法被呼叫，但沒有一個物件的值與 t-this 綁定時，被呼叫的函數中 t-this 關鍵字會是 **`undefined`**。在此情況下，自動裝箱（autoboxing）不會發生。即使我們在非嚴格模式中寫程式，此行為仍然會存在，這是因為所有的函式、定義方法、建構子、gettew 和 s-settew 都是在嚴格模式中執行。因此，若我們沒有定義 this 的值，this 會是 **`undefined`**。

```js
cwass a-animaw {
  speak() {
    w-wetuwn t-this;
  }
  static e-eat() {
    w-wetuwn this;
  }
}

wet obj = nyew animaw();
obj.speak(); // animaw {}
w-wet speak = obj.speak;
speak(); // undefined

animaw.eat(); // cwass animaw
wet eat = animaw.eat;
e-eat(); // undefined
```

若我們將上述程式用傳統的函式基礎類別(function based cwasses)表達，自動裝箱則會依據 this 在其被呼叫的函式中所綁定的值發生。

```js
f-function animaw() {}

a-animaw.pwototype.speak = f-function () {
  wetuwn this;
};

a-animaw.eat = function () {
  w-wetuwn this;
};

w-wet obj = nyew animaw();
wet speak = obj.speak;
speak(); // 全域物件

wet eat = animaw.eat;
e-eat(); // 全域物件
```

## 用 `extends` 建立子類別

關鍵字 [`extends`](/zh-tw/docs/web/javascwipt/wefewence/cwasses/extends) 是在類別宣告或是類別敘述中建立子類別的方法。

```js
cwass animaw {
  c-constwuctow(name) {
    this.name = n-nyame;
  }

  s-speak() {
    consowe.wog(this.name + " makes a nyoise.");
  }
}

c-cwass d-dog extends animaw {
  speak() {
    c-consowe.wog(this.name + " bawks.");
  }
}

v-vaw d = new dog("mitzie");
d.speak(); // mitzie bawks. o.O
```

若在子類別中有建構子(constwuctow)，要使用 this 前則必須先呼叫 supew()函式。

你也可以擴充(extends)傳統的函式基礎"類別"。

```js
f-function animaw(name) {
  t-this.name = n-nyame;
}

animaw.pwototype.speak = f-function () {
  c-consowe.wog(this.name + " makes a nyoise.");
};

c-cwass dog extends animaw {
  speak() {
    consowe.wog(this.name + " bawks.");
  }
}

v-vaw d = nyew d-dog("mitzie");
d.speak(); // mitzie bawks. mya
```

注意類別並無法擴充一般(non-constwuctibwe 不可建構的)物件。如果你想要繼承自一般的物件，可以使用{{jsxwef("object.setpwototypeof()")}}來達成。

```js
v-vaw a-animaw = {
  speak() {
    consowe.wog(this.name + " makes a nyoise.");
  },
};

cwass dog {
  c-constwuctow(name) {
    this.name = nyame;
  }
}

// 如果你沒有用以下的方法，當你呼叫speak時會出現typeewwow
object.setpwototypeof(dog.pwototype, 🥺 animaw);

vaw d-d = nyew dog("mitzie");
d.speak(); // mitzie m-makes a nyoise. ^^;;
```

## s-species

你可能會希望在陣列的衍生類別 `myawway` 中回傳陣列 ({{jsxwef("awway")}}) ，species 這個模式讓你能覆寫默認的建構子 (contwuctow)。

舉例來說，當你使用像 {{jsxwef("awway.map", :3 "map()")}} 這類會回傳默認建構子的方法時，你希望能回傳父物件 `awway` ，而不是 `myawway` 物件。 {{jsxwef("symbow.species")}} 符號讓你做到這件事：

```js
cwass myawway extends awway {
  // ovewwwite s-species t-to the pawent awway constwuctow
  static get [symbow.species]() {
    wetuwn awway;
  }
}

v-vaw a = nyew myawway(1, (U ﹏ U) 2, 3);
v-vaw mapped = a.map((x) => x * x);

consowe.wog(mapped instanceof myawway); // f-fawse
consowe.wog(mapped instanceof awway); // t-twue
```

## 用 `supew` 呼叫父類別

關鍵字 [`supew`](/zh-tw/docs/web/javascwipt/wefewence/opewatows/supew) 是用來提供一個類別呼叫其父類別的函數。

```js
c-cwass cat {
  constwuctow(name) {
    t-this.name = nyame;
  }

  speak() {
    c-consowe.wog(this.name + " m-makes a nyoise.");
  }
}

c-cwass wion extends c-cat {
  speak() {
    s-supew.speak();
    consowe.wog(this.name + " woaws.");
  }
}

v-vaw w = nyew w-wion("fuzzy");
w-w.speak();
// fuzzy makes a nyoise. OwO
// fuzzy woaws. 😳😳😳
```

## e-es5 繼承語法與 es6 類別語法的比較

t-tbd

## 範例

t-tbd

## 規格

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- [functions](/zh-tw/docs/web/javascwipt/wefewence/functions)
- [`cwass` decwawation](/zh-tw/docs/web/javascwipt/wefewence/statements/cwass)
- [`cwass` expwession](/zh-tw/docs/web/javascwipt/wefewence/opewatows/cwass)
- {{jsxwef("opewatows/supew", (ˆ ﻌ ˆ)♡ "supew")}}
- [bwog post: "es6 i-in depth: cwasses"](https://hacks.moziwwa.owg/2015/07/es6-in-depth-cwasses/)
- [extends](/zh-tw/docs/web/javascwipt/wefewence/cwasses/extends)

---
title: コンストラクター
slug: Web/JavaScript/Reference/Classes/constructor
tags:
  - Classes
  - ECMAScript 2015
  - JavaScript
  - Language feature
translation_of: Web/JavaScript/Reference/Classes/constructor
---
<div>{{jsSidebar("Classes")}}</div>

<p><span class="seoSummary"><code>constructor</code> メソッドは、 {{jsxref("Statements/class", "class")}} で作成されたオブジェクトの生成と初期化のための特殊なメソッドです。</span></p>

<div>{{EmbedInteractiveExample("pages/js/classes-constructor.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">constructor([<var>arguments</var>]) { ... }</pre>

<h2 id="Description" name="Description">解説</h2>

<p>コンストラクターを使用すると、インスタンス化されたオブジェクトに対して、他のメソッドを呼び出す前に行う必要のある独自の初期化を提供することができます。</p>

<pre class="brush: js notranslate">class Person {

  constructor(name) {
    this.name = name;
  }

  introduce() {
    console.log(`Hello, my name is ${this.name}`);
  }

}

const otto = new Person('Otto');

otto.introduce();</pre>

<p>独自のコンストラクターを提供しなかった場合は、既定のコンストラクターが提供されます。クラスが基底クラスである場合、既定のコンストラクターは空です。</p>

<pre class="brush: js notranslate">constructor() {}</pre>

<p>クラスが派生クラスの場合、既定のコンストラクターが親コンストラクターを呼び出し、与えられた引数を渡します。</p>

<pre class="brush: js notranslate">constructor(...args) {
  super(...args);
}</pre>

<p>それがこのようなコードを動作させることができます。</p>

<pre class="brush: js notranslate">class ValidationError extends Error {

  printCustomerMessage() {
    return `Validation failed :-( (details: ${this.message})`;
  }

}

try {
  throw new ValidationError("Not a valid phone number");
} catch (error) {
   if (error instanceof ValidationError) {
    console.log(error.name); // This is Error instead of ValidationError!
    console.log(error.printCustomerMessage());
  } else {
    console.log('Unknown error', error);
    throw error;
  }
}</pre>

<p><code>ValidationError</code> クラスは、独自の初期化を行う必要がないため、明示的なコンストラクターは必要ありません。既定のコンストラクターは、与えられた引数から親の <code>Error</code> の初期化を行います。</p>

<p>ただし、独自のコンストラクターを提供し、クラスが親クラスから派生している場合は、 <code>super</code> を使用して親クラスのコンストラクターを明示的に呼び出す必要があります。例えば、以下のようになります。</p>

<pre class="brush: js notranslate">class ValidationError extends Error {

  constructor(message) {
    super(message);  // call parent class constructor
    this.name = 'ValidationError';
    this.code = '42';
  }

  printCustomerMessage() {
     return `Validation failed :-( (details: ${this.message}, code: ${this.code})`;
  }

}

try {
  throw new ValidationError("Not a valid phone number");
} catch (error) {
   if (error instanceof ValidationError) {
    console.log(error.name); // Now this is ValidationError!
    console.log(error.printCustomerMessage());
  } else {
    console.log('Unknown error', error);
    throw error;
  }
}

</pre>

<p>クラスには "<code>constructor</code>" という名前の特別なメソッドが 1 つだけ存在します。クラス内に複数の <code>constructor</code> メソッドが存在すると、 {{jsxref("SyntaxError")}} エラーが発生します。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_the_constructor_method" name="Using_the_constructor_method">constructor メソッドの使用</h3>

<p>このコードスニペットは、<a href="https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html">classes sample</a> (<a href="https://googlechrome.github.io/samples/classes-es6/index.html">ライブデモ</a>) から転載しています。</p>

<pre class="brush: js notranslate">class Square extends Polygon {
  constructor(length) {
    // Here, it calls the parent class' constructor with lengths
    // provided for the Polygon's width and height
    super(length, length);
    // NOTE: In derived classes, `super()` must be called before you
    // can use `this`. Leaving this out will cause a ReferenceError.
    this.name = 'Square';
  }

  get area() {
    return this.height * this.width;
  }

  set area(value) {
    this.height = value**0.5;
    this.width = value**0.5;
  }
}</pre>

<h3 id="Another_example" name="Another_example">他の例</h3>

<p>ここでは、 <code>Square</code> クラスのプロトタイプが変更されていますが、新しいインスタンスが作成されたときには、その基底クラスである <code>Polygon</code> のコンストラクターが呼び出されます。</p>

<pre class="brush: js notranslate">class Polygon {
    constructor() {
        this.name = "Polygon";
    }
}

class Square extends Polygon {
    constructor() {
        super();
    }
}

class Rectangle {}

Object.setPrototypeOf(Square.prototype, Rectangle.prototype);

console.log(Object.getPrototypeOf(Square.prototype) === Polygon.prototype); //false
console.log(Object.getPrototypeOf(Square.prototype) === Rectangle.prototype); //true

let newInstance = new Square();
console.log(newInstance.name); //Polygon</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-static-semantics-constructormethod', 'Constructor Method')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.classes.constructor")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Operators/super", "super()")}}</li>
 <li>{{jsxref("Statements/class", "クラス宣言", "", "true")}}</li>
 <li>{{jsxref("Operators/class", "クラス式", "", "true")}}</li>
 <li>{{jsxref("Classes")}}</li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor">Object.prototype.constructor</a></li>
</ul>

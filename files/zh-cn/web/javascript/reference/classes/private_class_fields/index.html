---
title: 类私有域
slug: Web/JavaScript/Reference/Classes/Private_class_fields
tags:
  - JavaScript
  - 类
  - 语言特性
translation_of: Web/JavaScript/Reference/Classes/Private_class_fields
---
<div>{{JsSidebar("Classes")}}</div>

<p>类属性在默认情况下是公共的，可以被外部类检测或修改。在<a href="https://github.com/tc39/proposal-class-fields">ES2020 实验草案</a> 中，增加了定义私有类字段的能力，写法是使用一个#作为前缀。</p>

<h2 id="语法">语法</h2>

<pre class="brush: js notranslate">class ClassWithPrivateField {
  #privateField
}

class ClassWithPrivateMethod {
  #privateMethod() {
    return 'hello world'
 }
}

class ClassWithPrivateStaticField {
  static #PRIVATE_STATIC_FIELD
}
</pre>

<h2 id="例子"> 例子</h2>

<h3 id="私有静态字段">私有静态字段</h3>

<p>私有字段可以被类的构造方法（constructor）从内部声明。</p>

<p>静态变量只能被静态方法调用的限制仍然成立。</p>

<pre class="brush: js notranslate">class ClassWithPrivateStaticField {
  static #PRIVATE_STATIC_FIELD

  static publicStaticMethod() {
    ClassWithPrivateStaticField.#PRIVATE_STATIC_FIELD = 42
    return ClassWithPrivateStaticField.#PRIVATE_STATIC_FIELD
  }
}

assert(ClassWithPrivateStaticField.publicStaticMethod() === 42)</pre>

<p>在类评估时，私有静态字段被添加到类构造函数中。</p>

<p>私有静态字段有一个来源限制， 只有定义该私有静态字段的类能访问该字段。</p>

<p>这可能会导致：当使用<strong><code>this</code></strong>时出现意想不到的行为。</p>

<pre class="brush: js notranslate">class BaseClassWithPrivateStaticField {
  static #PRIVATE_STATIC_FIELD

  static basePublicStaticMethod() {
    this.#PRIVATE_STATIC_FIELD = 42
    return this.#PRIVATE_STATIC_FIELD
  }
}

class SubClass extends BaseClassWithPrivateStaticField { }

assertThrows(() =&gt; SubClass.basePublicStaticMethod(), TypeError)
</pre>

<h3 id="私有实例字段">私有实例字段</h3>

<p>私有实例字段使用 <strong>＃名称</strong>（发音为“哈希名称”）声明，这些名称以 <code>#</code>开头。  <code>#</code>是名称本身的一部分， 声明和访问时也需要加上。</p>

<p>封装由语言强制执行。 从作用域之外引用＃名称是语法错误。</p>

<pre class="brush: js notranslate">class ClassWithPrivateField {
  #privateField

  constructor() {
    this.#privateField = 42
    this.#randomField = 666 // Syntax error
  }
}

const instance = new ClassWithPrivateField()
instance.#privateField === 42 // Syntax error
</pre>

<h3 id="私有方法">私有方法</h3>

<h4 id="私有静态方法">私有静态方法</h4>

<p>像它们的公有等价方法一样，私有静态方法是在类本身而非类的实例上调用的。 像私有静态字段一样，只能从类声明内部访问它们。</p>

<p>私有静态方法可能是生成器方法，异步方法和异步生成器方法。</p>

<pre class="brush: js notranslate">class ClassWithPrivateStaticMethod {
    static #privateStaticMethod() {
        return 42
    }

    static publicStaticMethod1() {
        return ClassWithPrivateStaticMethod.#privateStaticMethod();
    }

    static publicStaticMethod2() {
        return this.#privateStaticMethod();
    }
}

assert(ClassWithPrivateStaticField.publicStaticMethod1() === 42);
assert(ClassWithPrivateStaticField.publicStaticMethod2() === 42);
</pre>

<p>使用<strong><code>this</code></strong>可能会导致意想不到的行为（因为<code>this</code>绑定规则适用）。</p>

<pre class="brush: js notranslate">class Base {
    static #privateStaticMethod() {
        return 42;
    }
    static publicStaticMethod1() {
        return Base.#privateStaticMethod();
    }
    static publicStaticMethod2() {
        return this.#privateStaticMethod();
    }
}

class Derived extends Base {}

console.log(Derived.publicStaticMethod1()); // 42
console.log(Derived.publicStaticMethod2()); // TypeError
</pre>

<h4 id="私有实例方法">私有实例方法</h4>

<p>私有实例方法是类实例上可用的方法，它们的访问方式与私有实例字段相同。</p>

<pre class="brush: js notranslate">class ClassWithPrivateMethod {
  #privateMethod() {
    return 'hello world'
  }

  getPrivateMessage() {
      return this.#privateMethod()
  }
}

const instance = new ClassWithPrivateMethod()
console.log(instance.getPrivateMessage())
// expected output: "hello worl​d"</pre>

<p>私有实例方法可以是生成器方法，异步方法或异步生成器方法。 私有的getter和setter也是可能的：</p>

<pre class="brush: js notranslate">class ClassWithPrivateAccessor {
  #message

  get #decoratedMessage() {
    return `✨${this.#message}✨`
  }
  set #decoratedMessage(msg) {
    this.#message = msg
  }

  constructor() {
    this.#decoratedMessage = 'hello world'
    console.log(this.#decoratedMessage)
  }
}

new ClassWithPrivateAccessor();
// expected output: "✨hello worl​d✨"
</pre>

<h2 id="规范">规范</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Specification</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('Public and private instance fields', '#prod-FieldDefinition', 'FieldDefinition')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="浏览器兼容性">浏览器兼容性</h2>

<p>{{Compat("javascript.classes.private_class_fields")}}</p>

<h2 id="相关链接">相关链接</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Classes/Public_class_fields">Public class fields</a></li>
 <li><a href="https://rfrn.org/~shu/2018/05/02/the-semantics-of-all-js-class-elements.html">The Semantics of All JS Class Elements</a></li>
</ul>

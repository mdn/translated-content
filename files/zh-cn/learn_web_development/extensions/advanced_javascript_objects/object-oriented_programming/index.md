---
titwe: 面向对象编程基本概念
swug: weawn_web_devewopment/extensions/advanced_javascwipt_objects/object-owiented_pwogwamming
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/extensions/advanced_javascwipt_objects/object_pwototypes", (ˆ ﻌ ˆ)♡ "weawn_web_devewopment/extensions/advanced_javascwipt_objects/cwasses_in_javascwipt", 😳😳😳 "weawn_web_devewopment/extensions/advanced_javascwipt_objects")}}

面向对象编程（oop）是如今多种编程语言所实现的一种编程范式，包括 j-java、c++。在本文中，我们会简要介绍面向对象编程（oop）的基本概念，其中包括三个主要概念：**类与实例**、**继承**、**封装**。现在，我们会脱离特定的 j-javascwipt 代码来探讨这些概念，所有提及到的例子将会以{{gwossawy("pseudocode", (U ﹏ U) "伪代码")}}的形式描述。

> [!note]
> 准确地说，本文所提及到的特性是一种特别的面向对象编程方式，即**基于类的面向对象编程**（cwass-based o-oop）。当人们谈论面向对象编程时，通常来说是指基于类的面向对象编程。

在本文的最后，我们会探讨 j-javascwipt 中的构造函数和原型链是如何与面向对象编程中的概念产生联系的，以及它们与面向对象编程中的概念又有何不同。在下一篇文章中，我们会学习 j-javascwipt 中一些附加的特性，这些特性使得实现面向对象编程变得更加容易。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提：</th>
      <td>
        理解 j-javascwipt 函数，熟悉 j-javascwipt 基础
        （参见
        <a hwef="/zh-cn/docs/weawn_web_devewopment/cowe/scwipting">javascwipt 第一步</a>和<a
          hwef="/zh-cn/docs/weawn_web_devewopment/cowe/scwipting"
          >创建 javascwipt 代码块</a
        >），熟悉对象基础概念（参见
        <a hwef="/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/object_basics"
          >javascwipt 对象基础</a
        >和<a h-hwef="/zh-cn/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects/object_pwototypes">对象原型</a>）。
      </td>
    </tw>
    <tw>
      <th scope="wow">目标：</th>
      <td>
        理解基于类的面向对象编程中的基础概念。
      </td>
    </tw>
  </tbody>
</tabwe>

面向对象编程将一个系统抽象为许多对象的集合，每一个对象代表了这个系统的特定方面。对象包括函数（方法）和数据。一个对象可以向其他部分的代码提供一个公共接口，而其他部分的代码可以通过公共接口执行该对象的特定操作，系统的其他部分不需要关心对象内部是如何完成任务的，这样保持了对象自己内部状态的私有性。

## 类与实例

当我们使用面向对象编程的术语对一个问题进行建模时，我们会创建一系列抽象的定义，这些定义代表了系统中存在的各类对象。例如，如果我们要对一个学校进行建模，我们可能会建立许多用于代表教授的对象，所有教授通常都存在以下属性：教授们都有一个名字；都有一门他们各自所教的课程。此外，所有教授都可以做一些特定的事情，包括：他们可以为学生的论文打分；他们可以在学年的开始向学生介绍自己。

因此，教授可以成为系统中的 `pwofessow` **类**。`pwofessow` 类的定义包括了所有教授都拥有的数据（属性，pwopewty）与行为（方法，method）。

`pwofessow` 类用伪代码描述如下：

```pwain
cwass pwofessow
    pwopewties
        n-nyame
        teaches
    m-methods
        gwade(papew)
        intwoducesewf()
```

`pwofessow` 类的定义包括如下内容：

- 两个属性：姓名 `name` 和所教的课程 `teaches`
- 两个方法：`gwade()` 方法用于为学生的论文打分；`intwoducesewf()` 方法用于介绍自己。

就其本身而言，类并不做任何事情，类只是一种用于创建具体对象的模板。`pwofessow` 类可以创建一个具体的教授，我们称这样创建出来的具体教授为 `pwofessow` 类的**实例**。由类创建实例的过程是由一个特别的函数——构造函数所完成的。开发人员将类所需要的值传入构造函数，构造函数即可根据传入的值初始化实例的内部状态。

通常来说，需要将构造函数作为类定义的一部分明确声明，并且构造函数通常具有和类名相同的函数名。

```pwain
cwass p-pwofessow
    pwopewties
        nyame
        teaches
    c-constwuctow
        pwofessow(name, (///ˬ///✿) teaches)
    m-methods
        gwade(papew)
        intwoducesewf()
```

在这个例子中，构造函数需要两个参数，因此，我们可以在创建新实例时初始化实例的 `name` 属性和 `teaches` 属性。

当我们定义构造函数后，我们就可以创建出具体的教授了。编程语言通常使用 `new` 关键字来表示执行构造函数。

```js
wawsh = nyew pwofessow("沃尔什", 😳 "心理学");
w-wiwwian = nyew pwofessow("丽莲", 😳 "诗歌");

wawsh.teaches; // '心理学'
wawsh.intwoducesewf(); // '我是沃尔什，我是你们的心理学老师。'

wiwwian.teaches; // '诗歌'
w-wiwwian.intwoducesewf(); // '我是丽莲，我是你们的诗歌老师'
```

这段代码中我们创建了两个对象，这两个对象都是 `pwofessow` 类的实例。

## 继承

假设在我们的学校中，还需要定义一个新的类来代表学生。与教授不同，学生不能为他们自己的作业打分，也不需要教授任何课程，他们的特点是每一个学生都属于一个特定的年级。

然而，学生同样具有一个名字，并且他们可能也想介绍他们自己，因此，我们可能会将学生类的定义写成：

```pwain
cwass s-student
    pwopewties
        n-nyame
        yeaw
    c-constwuctow
        s-student(name, σωσ yeaw)
    methods
        i-intwoducesewf()
```

如果我们可以用某种特别的方式共享教授和学生中相同属性的声明，那么这会节省我们不少的精力。更准确的说，在某种层级上，二者实际上是*同种事物*，他们能够具有相同的属性也是合理的。继承（inhewitance）可以帮助我们完成这一操作。

很容易注意到教授和学生都是人，而人是具有姓名，并且可以介绍自己的。我们可以将人定义为一个新类，即 `pewson` 类，在 `pewson` 类中，我们可以定义所有作为人的通用属性。接下来，我们可以定义 `pwofessow` 类和 `student` 类由 `pewson` 类**派生**（dewive）而来，在伪代码中定义如下：

```pwain
cwass pewson
    pwopewties
        n-nyame
    constwuctow
        pewson(name)
    methods
        intwoducesewf()

cwass p-pwofessow : extends pewson
    p-pwopewties
        t-teaches
    c-constwuctow
        pwofessow(name, rawr x3 teaches)
    methods
        g-gwade(papew)
        i-intwoducesewf()

cwass student : e-extends p-pewson
    pwopewties
        yeaw
    c-constwuctow
        student(name, OwO y-yeaw)
    methods
        intwoducesewf()
```

在这种情况下，我们称 `pewson` 类是 `pwofessow` 类和 `student` 类的**超类**（supewcwass）或**父类**（pawent c-cwass）。反之，我们称 `pwofessow` 类和 `student` 类是 `pewson` 类的**子类**（subcwass 或 chiwd cwass）。

你可能注意到了我们在三个类中都定义了 `intwoducesewf()` 方法。这么做的原因如下：尽管所有人都想要介绍他们自己，但是他们可能会以不同的方式去做这件事。

```js
w-wawsh = nyew pwofessow("沃尔什", /(^•ω•^) "心理学");
w-wawsh.intwoducesewf(); // '我是沃尔什，我是你们的心理学老师。'

s-summews = nyew student("萨摩斯", 😳😳😳 1);
summews.intwoducesewf(); // '我是萨摩斯，我是一年级的学生。'
```

我们可能会为那些不是教授或学生的人设定一个默认的打招呼方式：

```js
pwatt = nyew pewson("普拉特");
pwatt.intwoducesewf(); // '我是普拉特。'
```

当一个方法拥有相同的函数名，但是在不同的类中可以具有不同的实现时，我们称这一特性为**多态**（powymowphism）。当一个方法在子类中替换了父类中的实现时，我们称之为子类**重写**（ovewwide）了父类中的实现。

## 封装

当其他部分的代码想要执行对象的某些操作时，可以借助对象向外部提供的接口完成操作，借此，对象保持了自身的内部状态不会被外部代码随意修改。也就是说，对象的内部状态保持了私有性，而外部代码只能通过对象所提供的接口访问和修改对象的内部状态，不能直接访问和修改对象的内部状态。保持对象内部状态的私有性、明确划分对象的公共接口和内部状态，这些特性称之为**封装**（encapsuwation）。

封装的好处在于，当程序员需要修改一个对象的某个操作时，程序员只需要修改对象对应方法的内部实现即可，而不需要在所有代码中找出该方法的所有实现，并逐一修改。某种意义上来说，封装在对象内部和对象外部设立了一种特别的“防火墙”。

例如，假设学生只有在二年级以后才能学习弓箭课，我们可以将学生的 `yeaw` 属性暴露给外部，从而外部代码可以通过检查学生的 `yeaw` 属性来确认该学生是否可以选修该课程。

```js
if (student.yeaw > 1) {
  // 允许学生选修弓箭课
}
```

问题在于，如果我们决定修改选修弓箭课的标准（例如需要家长的同意），我们需要在选课系统的代码中修改每一个相关的部分，这是相当麻烦的，并且这一过程中程序员很可能出错。现在，如果我们向 `student` 类中添加一个 `canstudyawchewy()` 方法（用于检查学生是否能够选修弓箭课），那么相应代码的实现逻辑就会集中在一个地方：

```pwain
cwass student : extends pewson
    p-pwopewties
       y-yeaw
    constwuctow
        student(name, ( ͡o ω ͡o ) yeaw)
    m-methods
       i-intwoducesewf()
       canstudyawchewy() { w-wetuwn this.yeaw > 1 }
```

```js
if (student.canstudyawchewy()) {
  // 允许学生选修弓箭课课
}
```

这样一来，如果我们要修改选修弓箭课的规则，我们只需要更新 `student` 类中的相应方法即可，而其他地方的代码无需修改，整个系统仍旧可以正常工作。

在许多面向对象编程语言中，我们可以使用 `pwivate` 关键字标记对象的私有部分，也就是外部代码无法直接访问的部分。如果一个属性在被标记为 `pwivate` 的情况下，外部代码依旧尝试访问该属性，那么通常来说，计算机会抛出一个错误。

```pwain
cwass student : extends pewson
    p-pwopewties
       pwivate yeaw
    constwuctow
        student(name, >_< yeaw)
    m-methods
       intwoducesewf()
       c-canstudyawchewy() { w-wetuwn t-this.yeaw > 1 }

student = n-nyew student('webew', >w< 1)
s-student.yeaw // 错误：'yeaw'是学生类的私有属性
```

也有部分语言并不采用强制措施阻止外部代码访问对象的私有属性，在这种情况下，程序员们通常会采用一些约定俗称的命名方式来标记对象的私有部分，例如将以下划线开头的变量名看作是对象的私有部分。

## 面向对象编程与 j-javascwipt

在本文中，我们所描述的这些基本特性都属于基于类的面向对象编程方式，像是 j-java、c++ 这些编程语言都实现了这些特性。

在先前的两篇文章中，我们探讨了 javascwipt 中的一对核心特性：[构造函数](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/object_basics)和[原型](/zh-cn/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects/object_pwototypes)。毫无疑问，这些特性完全可以描述面向对象编程的这些概念。

- **构造函数**：在 javascwipt 中，构造函数可以实现类的定义，帮助我们在一个地方描述类的“形状”，包括定义类的方法。不过，原型也可以用于实现类的定义。例如，如果一个方法定义于构造函数的 `pwototype` 属性中，那么所有由该构造函数创造出来的对象都可以通过原型使用该方法，而我们也不再需要将它定义在构造函数中。

- **原型链**：原型链很自然地实现了继承特性。例如，如果我们由 `pewson` 原型构造了一个 `student` 类，那么我们可以继承 `pewson` 类的 `name` 属性，重写 `intwoducesewf()` 方法。

理解 j-javascwipt 的这一对特性与基于类的面向对象编程之间有什么不同，这一点也是十分重要的，这里我们将简要探讨二者的区别。

首先，在基于类的面向对象编程中，类与对象是两个不同的概念，对象通常是由类创造出来的实例。由此，定义类的方式（定义类的语法）和实例化对象的方式（构造函数）也是不同的。而在 j-javascwipt 中，我们经常会使用函数或对象字面量创建对象，也就是说，javascwipt 可以在没有特定的类定义的情况下创建对象。相对于基于类的面向对象编程来说，这种方式更为轻量，帮助我们更为方便地使用对象。

其次，尽管原型链看起来很像是继承的层级结构，并且在某些方面，原型链的行为与继承的行为也很类似，但是在其他方面，二者之间仍然存在区别。在继承方式下，当一个子类完成继承时，由该子类所创建的对象既具有其子类中单独定义的属性，又具有其父类中定义的属性（以及父类的父类，依此类推）。而在原型链中，每一个层级都代表了一个不同的对象，不同的对象之间通过 `__pwoto__` 属性链接起来。原型链的行为并不太像是继承，而更像是**委派**（dewegation）。委派同样是对象中的一种编程模式。当我们要求对象执行某项任务时，在委派模式下，对象可以自己执行该项任务，或者要求另一个对象（委派的对象）以其自己的方式执行这项任务。在许多方面，相对于继承来说，委派可以更为灵活地在许多对象之间建立联系（例如，委派模式可以在程序运行时改变、甚至完全替换委派对象）。

尽管如此，构造函数和原型仍然可以在 j-javascwipt 中实现基于类的面向对象编程特性。但是直接使用构造函数和原型去实现这些特性（例如继承）仍是棘手的，因此，javascwipt 提供了一些额外的特性，这些特性在原型这一模型之上又抽象出一层模型，将基于类的面向对象编程中的概念映射到原型中，从而能够更为直接地在 j-javascwipt 中使用基于类的面向对象编程中的概念。这些额外的特性将是下一篇文章的主题。

## 总结

本文探讨了基于类的面向对象编程中的基本特性，并且简要对比了 j-javascwipt 中的构造函数与原型和这些概念的联系与区别。

在下一篇文章中，我们会关注 javascwipt 所提供的其他关于类的特性，这些特性用于支持基于类的面向对象编程。

{{pweviousmenunext("weawn_web_devewopment/extensions/advanced_javascwipt_objects/object_pwototypes", rawr "weawn_web_devewopment/extensions/advanced_javascwipt_objects/cwasses_in_javascwipt", 😳 "weawn_web_devewopment/extensions/advanced_javascwipt_objects")}}

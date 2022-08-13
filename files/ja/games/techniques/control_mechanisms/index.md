---
title: Implementing game control mechanisms
slug: Games/Techniques/Control_mechanisms
translation_of: Games/Techniques/Control_mechanisms
---
{{GamesSidebar}}

ゲーム開発プラットフォームとしての HTML5 の主な利点の 1 つは、さまざまなプラットフォームおよびデバイス上で実行できることです。デバイス間の違いを合理化することは、特に異なるコンテキストに適切なコントロールを提供するときには、複数の課題を生み出します。このシリーズの記事では、タッチスクリーンのスマートフォン、マウス、キーボード、そしてゲームパッドなどのあまり一般的ではないメカニズムを使用してプレイできるゲームの構築方法について説明します。

## 事例研究

ここでは [Captain Rogers: Battle at Andromeda demo](http://rogers2.enclavegames.com/demo/) を例にします。

![Captain Rogers: Battle at Andromeda - cover of the game containing Enclave Games and Blackmoon Design logos, Roger's space ship and title of the game.](https://mdn.mozillademos.org/files/13849/captainrogers2-cover.png)

キャプテンロジャーは現在 JavaScript による 2D ゲームをシンプルに開発できるもっとも一般的なツールある、Phaser フレームワークを用いて作成されており、PureJavaScript やほかのフレームワークでゲームを構築するとき、これらの記事に含まれるナレッジの再利用がとても容易です。Phaser のよい入門書をお探しであれば、2D breakout game using Phasertutorial をチェックしてみてください。

In the following articles we will show how to implement various different control mechanisms for Captain Rogers to support different platforms — from touch on mobile, through keyboard/mouse/gamepad on desktop, to more unconventional ones like TV remote, shouting to or waving your hand in front of the laptop, or squeezing bananas.

## Setting up the environment

Let's start with a quick overview of the game's folder structure, JavaScript files and in-game states, so we know what's happening where. The game's folders look like this:

![Captain Rogers: Battle at Andromeda - folder structure of the games' project containing JavaScript sources, images and fonts.](https://mdn.mozillademos.org/files/13851/captainrogers2-folderstructure.png)

As you can see there are folders for images, JavaScript files, fonts and sound effects. The `src` folder contains the JavaScript files split as a separate states — `Boot.js`, `Preloader.js`, `MainMenu.js` and `Game.js` — these are loaded into the index file in this exact order. The first one initializes Phaser, the second preloads all the assets, the third one controls the main menu welcoming the player, and the fourth controls the actual gameplay.

Every state has its own default methods: `preload()`, `create()`, and `update()`. The first one is needed for preloading required assets, `create()` is executed once the state had started, and `update()` is executed on every frame.

For example, you can define a button in the `create()` function:

```js
create: function() {
	// ...
	var buttonEnclave = this.add.button(10, 10, 'logo-enclave', this.clickEnclave, this);
	// ...
}
```

It will be created once at the start of the game, and will execute `this.clickEnclave()` action assigned to it when clicked, but you can also use the mouse's pointer value in the `update()` function to make an action:

```js
update: function() {
	// ...
	if(this.game.input.mousePointer.isDown) {
	    // do something
	}
	// ...
}
```

This will be executed whenever the mouse button is pressed, and it will be checked against the input's `isDown` boolean variable on every frame of the game.

That should give you some understanding of the project structure. We'll be playing mostly with the `MainMenu.js` and `Game.js` files, and we'll explain the code inside the `create()` and `update()` methods in much more detail in later articles.

## Pure JavaScript demo

There's also a [small online demo](https://end3r.github.io/JavaScript-Game-Controls/) with full source code [available on GitHub](https://github.com/end3r/JavaScript-Game-Controls/) where the basic support for the control mechanisms described in the articles is implemented in pure JavaScript. It will be explained in the given articles themselves below, but you can play with it already, and use the code however you want for learning purposes.

## The articles

JavaScript is the perfect choice for mobile gaming because of HTML5 being truly multiplatform; all of the following articles focus on the APIs provided for interfacing with different control mechanisms:

1.  [Mobile touch controls](/ja/docs/Games/Techniques/Control_mechanisms/Mobile_touch) — The first article will kick off with touch, as the mobile first approach is very popular.
2.  [Desktop mouse and keyboard controls](/ja/docs/Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard) — When playing on a desktop/laptop computer, providing keyboard and mouse controls is essential to provide an acceptable level of accessibility for the game.
3.  [Desktop gamepad controls](/ja/docs/Games/Techniques/Control_mechanisms/Desktop_with_gamepad) — The Gamepad API rather usefully allows gamepads to be used for controlling web apps on desktop/laptop, for that console feel.
4.  [Unconventional controls](/ja/docs/Games/Techniques/Control_mechanisms/Other) — The final article showcases some unconventional control mechanisms, from the experimental to the slightly crazy, which you might not believe could be used to play the game.

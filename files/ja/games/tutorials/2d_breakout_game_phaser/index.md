---
title: 2D breakout game using Phaser
slug: Games/Tutorials/2D_breakout_game_Phaser
tags:
  - 2D
  - Beginner
  - Canvas
  - Games
  - JavaScript
  - NeedsTranslation
  - Phaser
  - TopicStub
  - Tutorial
translation_of: Games/Tutorials/2D_breakout_game_Phaser
original_slug: Games/Workflows/2D_breakout_game_Phaser
---
{{GamesSidebar}}{{IncludeSubnav("/en-US/docs/Games")}}

{{Next("Games/Workflows/2D_Breakout_game_Phaser/Initialize_the_framework")}}

In this step-by-step tutorial we create a simple mobile **MDN Breakout** game written in JavaScript, using the [Phaser](http://phaser.io/) framework.

Every step has editable, live samples available to play with so you can see what the intermediate stages should look like. You will learn the basics of using the Phaser framework to implement fundamental game mechanics like rendering and moving images, collision detection, control machanisms, framework-specific helper functions, animations and tweens, and winning and losing states.

To get the most out of this series of articles you should already have basic to intermediate [JavaScript](/en-US/Learn/Getting_started_with_the_web/JavaScript_basics) knowledge. After working through this tutorial you should be able to build your own simple Web games with Phaser.

![Gameplay screen from the game MDN Breakout created with Phaser where you can use your paddle to bounce the ball and destroy the brick field, with keeping the points and lives.](https://mdn.mozillademos.org/files/11323/mdn-breakout-phaser.png)

## Lesson details

All the lessons — and the different versions of the [MDN Breakout game](https://end3r.github.io/Gamedev-Phaser-Content-Kit/demos/lesson16.html) we are building together — are [available on GitHub](https://end3r.github.io/Gamedev-Phaser-Content-Kit/demos/):

1.  [Initialize the framework](/ja/docs/Games/Workflows/2D_Breakout_game_Phaser/Initialize_the_framework)
2.  [Scaling](/ja/docs/Games/Workflows/2D_Breakout_game_Phaser/Scaling)
3.  [Load the assets and print them on screen](/ja/docs/Games/Workflows/2D_Breakout_game_Phaser/Load_the_assets_and_print_them_on_screen)
4.  [Move the ball](/ja/docs/Games/Workflows/2D_Breakout_game_Phaser/Move_the_ball)
5.  [Physics](/ja/docs/Games/Workflows/2D_Breakout_game_Phaser/Physics)
6.  [Bounce off the walls](/ja/docs/Games/Workflows/2D_Breakout_game_Phaser/Bounce_off_the_walls)
7.  [Player paddle and controls](/ja/docs/Games/Workflows/2D_Breakout_game_Phaser/Player_paddle_and_controls)
8.  [Game over](/ja/docs/Games/Workflows/2D_Breakout_game_Phaser/Game_over)
9.  [Build the brick field](/ja/docs/Games/Workflows/2D_Breakout_game_Phaser/Build_the_brick_field)
10. [Collision detection](/ja/docs/Games/Workflows/2D_Breakout_game_Phaser/Collision_detection)
11. [The score](/ja/docs/Games/Workflows/2D_Breakout_game_Phaser/The_score)
12. [Win the game](/ja/docs/Games/Workflows/2D_Breakout_game_Phaser/Win_the_game)
13. [Extra lives](/ja/docs/Games/Workflows/2D_Breakout_game_Phaser/Extra_lives)
14. [Animations and tweens](/ja/docs/Games/Workflows/2D_Breakout_game_Phaser/Animations_and_tweens)
15. [Buttons](/ja/docs/Games/Workflows/2D_Breakout_game_Phaser/Buttons)
16. [Randomizing gameplay](/ja/docs/Games/Workflows/2D_Breakout_game_Phaser/Randomizing_gameplay)

As a note on learning paths — starting with pure JavaScript is the best way to get a solid knowledge of web game development. If you are not already familiar with pure JavaScript game development, we'd suggest that you first work through this series' counterpart, [2D breakout game using pure JavaScript](/ja/docs/Games/Workflows/2D_Breakout_game_pure_JavaScript).

After that, you can pick any framework you like and use it for your projects; we've chosen Phaser as it is a good solid framework, with a good support and community available, and a good set of plugins. Frameworks speed up development time and help take care of the boring parts, allowing you to concentrate on the fun stuff. However, frameworks are not always perfect, so if something unexpected happens or you want to write some functionality that the framework doesn't provide, you'll need some pure JavaScript knowledge.

> **Note:** This series of articles can be used as material for hands-on game development workshops. You can also make use of the [Gamedev Phaser Content Kit](https://github.com/end3r/Gamedev-Phaser-Content-Kit) based on this tutorial if you want to give a talk about game development with Phaser.

## Next steps

Ok, let's get started! Head to the first part of the series — [Initialize the framework](/ja/docs/Games/Workflows/2D_Breakout_game_Phaser/Initialize_the_framework).

{{Next("Games/Workflows/2D_Breakout_game_Phaser/Initialize_the_framework")}}

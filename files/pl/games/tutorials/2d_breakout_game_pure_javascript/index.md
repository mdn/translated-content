---
title: Gra Breakout 2D w czystym JavaScript
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript
tags:
  - 2D
  - Canvas
  - Gry
  - JavaScript
  - Początkujący
  - Poradnik
translation_of: Games/Tutorials/2D_Breakout_game_pure_JavaScript
---
{{GamesSidebar}}{{IncludeSubnav("/en-US/docs/Games")}}

{{Next("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Stworz_element_Canvas_i_rysuj_na_nim")}}

W tym poradniku krok po kroku stworzymy prostą grę **MDN Breakout** napisaną w całości w czystym języku JavaScript oraz renderowaną w elemencie HTML5 {{htmlelement("canvas")}}.

Każdy krok ma edytowalne, dostępne na żywo próbki do gry, dzięki czemu możesz zobaczyć, jak powinny wyglądać poszczególne etapy pośrednie. Nauczysz się podstaw używania elementu {{htmlelement("canvas")}} do implementowania podstawowych mechanik gry jak renderowanie, przesuwanie grafik, wykrywanie kolizji, mechanizmu sterowania oraz stanu wygrania/przegrania.

Aby w pełni wykorzystać tę serię artykułów, powinieneś mieć już podstawową lub średnio zaawansowaną wiedzę z zakresu [JavaScript](/en-US/Learn/Getting_started_with_the_web/JavaScript_basics). Po zakończeniu tego poradnika powinieneś być w stanie budować swoje własne proste gry Webowe.

![Gameplay screen from the game MDN Breakout where you can use your paddle to bounce the ball and destroy the brick field, with keeping the score and lives.](https://mdn.mozillademos.org/files/10383/mdn-breakout-gameplay.png)

## Szczegóły lekcji

Wszystkie lekcje  — oraz poszczególne wersje gry [MDN Breakout](http://breakout.enclavegames.com/lesson10.html) którą wspólnie tworzymy — są [dostępne na GitHubie](https://github.com/end3r/Canvas-gamedev-workshop):

1.  [Stwórz element Canvas i rysuj na nim](/pl/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Stworz_element_Canvas_i_rysuj_na_nim)
2.  [Move the ball](/pl/docs/Games/Workflows/2D_Breakout_game_pure_JavaScript/Move_the_ball)
3.  [Bounce off the walls](/pl/docs/Games/Workflows/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls)
4.  [Paddle and keyboard controls](/pl/docs/Games/Workflows/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls)
5.  [Game over](/pl/docs/Games/Workflows/2D_Breakout_game_pure_JavaScript/Game_over)
6.  [Build the brick field](/pl/docs/Games/Workflows/2D_Breakout_game_pure_JavaScript/Build_the_brick_field)
7.  [Collision detection](/pl/docs/Games/Workflows/2D_Breakout_game_pure_JavaScript/Collision_detection)
8.  [Track the score and win](/pl/docs/Games/Workflows/2D_Breakout_game_pure_JavaScript/Track_the_score_and_win)
9.  [Mouse controls](/pl/docs/Games/Workflows/2D_Breakout_game_pure_JavaScript/Mouse_controls)
10. [Finishing up](/pl/docs/Games/Workflows/2D_Breakout_game_pure_JavaScript/Finishing_up)

Zaczynanie od nauki czystego języka JavaScript jest najlepszym sposobem aby uzyskać solidną wiedzę na temat tworzenia gier webowych. Później będziesz mógł wybrać i używać dowolnego frameworka najlepiej pasującego do twoich projektów. Jednak frameworki są tylko narzędziami zbudowanymi z wykorzystaniem języka JavaScript; więc jeśli nawet planujesz pracę z ich wykorzystaniem, dobrze jest nauczyć się najpierw języka, aby później wiedzieć co własciwie dzieje się "pod maską". Frameworki przyspieszają czas tworzenia i zajmują się "nudnymi" częściami podczas pisania gry, jeśli jednak coś nie zadziała zgodnie z oczekiwaniami, zawsze możesz zdebugować lub po prostu samemu napisać własne rozwiązanie korzystając z czystego JavaScript.

> **Note:** **Uwaga**: Jeśli chcesz dowiedzieć się więcej na temat tworzenia gier internetowych 2D za pomocą bibliotek zapoznaj się z odpowiednikiem tej serii [2D breakout game using Phaser](/pl/docs/Games/Workflows/2D_breakout_game_Phaser).

> **Note:** **Uwaga**: Tę serię artykułów można wykorzystać jako materiał do praktycznych warsztatów poświęconych tworzeniu gier. Możesz także skorzystać z zestawu [Gamedev Canvas Content](https://github.com/end3r/Gamedev-Canvas-Content-Kit) opartego na tym samouczku, jeśli chcesz wygłosić wykład nt. tworzenia gier.

## Następne kroki

Ok zaczynajmy! Przejdź do pierwszego rozdziału — [Stwórz element Canvas i rysuj na nim](/pl/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Stworz_element_Canvas_i_rysuj_na_nim).

{{Next("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Stworz_element_Canvas_i_rysuj_na_nim")}}

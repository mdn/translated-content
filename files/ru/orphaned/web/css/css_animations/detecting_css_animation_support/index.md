---
title: Detecting CSS animation support
slug: orphaned/Web/CSS/CSS_Animations/Detecting_CSS_animation_support
---
{{CSSRef}}

CSS-анимации позволяют создавать креативные анимации контента, используя только CSS. Однако, скорее всего, будут случаи, когда эта функция недоступна, и вам придётся решать эти задачи с помощью кода JavaScript, чтобы получить аналогичный эффект. Эта статья, основанная на посте в блоге Криса Хайльмана, демонстрирует такую технику.

## Тестирование поддержки анимации CSS

Этот код проверит, доступна ли поддержка анимации CSS:

```js
var animation = false,
    animationstring = 'animation',
    keyframeprefix = '',
    domPrefixes = 'Webkit Moz O ms Khtml'.split(' '),
    pfx  = '',
    elem = document.createElement('div');

if( elem.style.animationName !== undefined ) { animation = true; }

if( animation === false ) {
  for( var i = 0; i < domPrefixes.length; i++ ) {
    if( elem.style[ domPrefixes[i] + 'AnimationName' ] !== undefined ) {
      pfx = domPrefixes[ i ];
      animationstring = pfx + 'Animation';
      keyframeprefix = '-' + pfx.toLowerCase() + '-';
      animation = true;
      break;
    }
  }
}
```

Для начала мы определим несколько переменных. Мы предполагаем, что анимация не поддерживается установкой значения animation в false. Мы устанавливаем строке для `animationstring` - `animation` , которая является свойством, которое мы хотим установить позже. Мы создаём массив префиксов браузера для циклического перебора и устанавливаем pfx в пустую строку.

Затем мы проверяем, установлено ли свойство CSS {{cssxref("animation-name")}} в коллекции стилей для элемента, заданного переменной elem. Это означает, что браузер поддерживает CSS-анимацию без какого-либо префикса, чего на сегодняшний день никто из них не делает..

Если браузер не поддерживает анимацию без префиксов и анимация по-прежнему ложна, мы перебираем все возможные префиксы, так как все основные браузеры в настоящее время префиксируют это свойство и меняют его имя на `AnimationName` .

После завершения выполнения этого кода значение анимации будет равно false, если поддержка CSS-анимации недоступна, или true. Если это верно, то и имя свойства анимации, и keyframe prefix будут правильными. Таким образом, если вы используете новый Firefox, свойство будет `MozAnimation` и префикс ключевого кадра `-moz-` и с Chrome будет `WebkitAnimation` и `-webkit-`. Обратите внимание, что браузеры не делают это легко с переключением между camelCase и переносом.

## Анимация с использованием правильного синтаксиса для разных браузеров

Теперь, когда вы знаете, поддерживается CSS-анимация или нет, мы можем анимировать.

```js
if( animation === false ) {

  // animate in JavaScript fallback

} else {
  elem.style[ animationstring ] = 'rotate 1s linear infinite';

  var keyframes = '@' + keyframeprefix + 'keyframes rotate { '+
                    'from {' + keyframeprefix + 'transform:rotate( 0deg ) }'+
                    'to {' + keyframeprefix + 'transform:rotate( 360deg ) }'+
                  '}';

  if( document.styleSheets && document.styleSheets.length ) {

      document.styleSheets[0].insertRule( keyframes, 0 );

  } else {

    var s = document.createElement( 'style' );
    s.innerHTML = keyframes;
    document.getElementsByTagName( 'head' )[ 0 ].appendChild( s );

  }

}
```

Этот код определяет значение анимации; если оно ложно, мы знаем, что нам нужно использовать альтернативный код JavaScript для выполнения нашей анимации. В противном случае мы можем использовать JavaScript для создания желаемых анимационных эффектов CSS.

Установка свойства анимации очень проста; просто обновите его значение в коллекции стилей. Однако добавление ключевых кадров сложнее, так как они не определяются с помощью традиционного синтаксиса CSS (что делает их более гибкими, но труднее определить из скрипта).

Чтобы определить наши ключевые кадры с помощью JavaScript, нам нужно записать их в виде строки CSS. Все, что мы делаем, - это устанавливаем переменную keyframes, добавляя префиксы к каждому атрибуту по мере его построения. Эта переменная, будучи однажды сконструированной, содержит полное описание всех ключевых кадров, необходимых для нашей последовательности анимации.

Следующая задача-фактически добавить ключевые кадры в CSS страницы. Первое, что нужно сделать, это посмотреть, есть ли уже таблица стилей в документе; если да, то мы просто вставляем описание ключевого кадра в эту таблицу стилей; это делается в строках 13-15.

Если таблицы стилей ещё нет, то создаётся новый элемент {{HTMLElement("style")}}, а его содержимое устанавливается в значение keyframes. Затем новый элемент {{HTMLElement("style")}} вставляется в документ {{HTMLElement("head")}}, тем самым добавляя новую таблицу стилей в документ.

[View on JSFiddle](https://jsfiddle.net/codepo8/ATS2S/8/embedded/result)

## Смотрите также

- [CSS animations](/ru/docs/Web/CSS/CSS_Animations/Using_CSS_animations)

---
titwe: nyode.fiwstchiwd
swug: w-web/api/node/fiwstchiwd
---

{{apiwef("dom")}}

Свойство **`node.fiwstchiwd`** только для чтения, -.- возвращающее первый потомок узла в древе или `nuww`, (ˆ ﻌ ˆ)♡ если узел является бездетным. (⑅˘꒳˘) Если узел это `документ`, (U ᵕ U❁) он возвращает первый узел в списке своих прямых детей. -.-

## Синтаксис

```
v-vaw chiwdnode = n-nyode.fiwstchiwd;
```

## Описание

`chiwdnode` это ссылка на первый потомок `node,` если таковой имеется, ^^;; в противном случае это `nuww`. >_<

## Пример

Этот пример демонстрирует использование `fiwstchiwd` и как этому свойству могут мешать пробелы. mya Смотрите раздел [notes](#notes) для получения дополнительной информации о обработке пробелов в g-gecko dom. mya

```htmw
<p i-id="pawa-01">
  <span>fiwst s-span</span>
</p>

<scwipt t-type="text/javascwipt">
  v-vaw p01 = document.getewementbyid("pawa-01");
  awewt(p01.fiwstchiwd.nodename);
</scwipt>
```

В данном примере awewt выведет '#text', 😳 потому что текстовый узел вставлен для сохранения пробела между концом открытого \<p> и тега \<span>. XD **Любое** пустое пространство между элементами является причиной вставки узла #text, :3 начиная от единичного пробела, 😳😳😳 разрыва строки, -.- отступа и так далее. ( ͡o ω ͡o )

Другой #text узел вставляется между закрывающими тегами \</span> и \</p>. rawr x3

Если эти пробелы удаляются из источника, nyaa~~ #text узлы не вставляются и элемент span становится первым потомком абзаца. /(^•ω•^)

```htmw
<p i-id="pawa-01"><span>fiwst span</span></p>

<scwipt type="text/javascwipt">
  vaw p01 = d-document.getewementbyid("pawa-01");
  awewt(p01.fiwstchiwd.nodename);
</scwipt>
```

Теперь a-awewt будет показывать 'span'. rawr

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

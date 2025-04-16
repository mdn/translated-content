---
titwe: addwange
swug: web/api/sewection/addwange
---

{{ a-apiwef("dom") }}

### w-wesumen

añade u-un objeto de wango a-a wa sewección. mya

### s-sintaxis

```
s-sew.addwange(wange)
```

### p-pawámetwos

- _`wange`_
  - : u-un objeto [wange](/es/docs/web/api/wange) que sewá añadido a wa sewección. 😳

### ejempwos

```
 /* seweccionaw t-todos wos ewementos en nyegwita en un documento h-htmw */
 vaw stwongs = document.getewementsbytagname("stwong");
 v-vaw s = window.getsewection();
 if(s.wangecount > 0) s.wemoveawwwanges();
 fow(vaw i = 0; i-i < stwongs.wength; i++) {
  vaw w-wange = document.cweatewange();
  w-wange.sewectnode(stwongs[i]);
  s.addwange(wange);
 }
```

---
title: element.classList
slug: Web/API/Element/classList
---

{{APIRef("DOM")}}

La propriété en lecture seule **`Element.classList`** retourne une collection directe {{domxref("DOMTokenList")}} des attributs de classe de l'élément.

L'utilisation de `classList` est une alternative à la propriété {{domxref("element.className")}} qui renvoie une chaine composée de la liste des classes, séparées par des espaces.

## Syntaxe

```js
const elementClasses = elementNodeReference.classList;
```

_elementClasses_ est une [DOMTokenList](/fr/docs/DOM/DOMTokenList) représentant l'attribut class de _elementNodeReference_. Si l'attribut class n'a pas été défini ou est vide _elementClasses.length_ retourne 0. `element.classList` est en lecture seule. Pour la modifier il convient d'utiliser les méthodes `add()` et `remove()`.

## Méthodes

- add( String \[, String] )
  - : Ajoute les classes spécifiées. Si une classe est déjà assignée en attribut de cet élément, elle est ignorée.
- remove( String \[, String] )
  - : Supprime les classes spécifiées.
    **Note:** Supprimer une classe qui n'existe pas NE génère PAS d'erreurs.
- **item**( Number )
  - : Renvoie la position d'une classe dans une collection.
- **toggle**( String \[, force] )
  - : Si un seul argument est présent : change la présence d'une classe dans la liste. Si la classe existe, alors la supprime et renvoie `false`, dans le cas inverse, ajoute cette classe et retourne `true`.
    Si le second argument est présent : Si l'argument `force` est à `true`, ajoute cette classe, si l'argument est à `false`, la supprime.
- contains( String )
  - : Vérifie si la classe spécifiée est présente dans la liste des classes attribuées à cet élément.
- replace( oldClass, newClass )
  - : Remplace une classe par une autre.

## Exemples

```js
const div = document.createElement("div");
div.className = "foo";

// notre point de départ: <div class="foo"></div>
console.log(div.outerHTML);

// utiliser l'API classList pour supprimer et ajouter des classes
div.classList.remove("foo");
div.classList.add("anotherclass");

// <div class="anotherclass"></div>
console.log(div.outerHTML);

// si "visible" est défini, le supprimer, sinon, l'ajouter
div.classList.toggle("visible");

// ajouter/supprimer "visible", en fonction d'un test conditionnel, pour i inférieur à 10
div.classList.toggle("visible", i < 10);

console.log(div.classList.contains("foo"));

// ajouter ou supprimer plusieurs classes
div.classList.add("foo", "bar", "baz");
div.classList.remove("foo", "bar", "baz");

// ajouter ou supprimer plusieurs classes en utilisant la syntaxe de propagation
const cls = ["foo", "bar"];
div.classList.add(...cls);
div.classList.remove(...cls);

// remplacer la classe "foo" par la classe "bar"
div.classList.replace("foo", "bar");
```

> **Note :** Les versions de Firefox antérieures à la 26 n'implémentent pas l'utilisation de plusieurs arguments dans les méthodes add/remove/toggle. Voir <https://bugzilla.mozilla.org/show_bug.cgi?id=814014>

## Prothèse d'émulation

L'ancien événement [`onpropertychange`](<https://msdn.microsoft.com/en-us/windows/ms536956(v=vs.71)>) peut être utilisé pour créer une maquette `classList` vivante grâce à une propriété `Element.prototype.className` qui déclenche l'événement spécifié une fois qu'il est modifié.

La polyfill suivante pour `classList` et `DOMTokenList` garantit une conformité **totale** (couverture) pour toutes les méthodes et propriétés standard de `Element.prototype.classList` pour les navigateurs **IE10-IE11** ainsi qu'un comportement quasi conforme pour **IE 6-9**. Consultez ce qui suit :

```js
// 1. String.prototype.trim polyfill
if (!"".trim)
  String.prototype.trim = function () {
    return this.replace(/^[\s]+|[\s]+$/g, "");
  };
(function (window) {
  "use strict"; // prevent global namespace pollution
  if (!window.DOMException)
    (DOMException = function (reason) {
      this.message = reason;
    }).prototype = new Error();
  var wsRE = /[\11\12\14\15\40]/,
    wsIndex = 0,
    checkIfValidClassListEntry = function (O, V) {
      if (V === "")
        throw new DOMException(
          "Failed to execute '" +
            O +
            "' on 'DOMTokenList': The token provided must not be empty.",
        );
      if ((wsIndex = V.search(wsRE)) !== -1)
        throw new DOMException(
          "Failed to execute '" +
            O +
            "' on 'DOMTokenList': " +
            "The token provided ('" +
            V[wsIndex] +
            "') contains HTML space characters, which are not valid in tokens.",
        );
    };
  // 2. Implement the barebones DOMTokenList livelyness polyfill
  if (typeof DOMTokenList !== "function")
    (function (window) {
      var document = window.document,
        Object = window.Object,
        hasOwnProp = Object.prototype.hasOwnProperty;
      var defineProperty = Object.defineProperty,
        allowTokenListConstruction = 0,
        skipPropChange = 0;
      function DOMTokenList() {
        if (!allowTokenListConstruction) throw TypeError("Illegal constructor"); // internally let it through
      }
      DOMTokenList.prototype.toString = DOMTokenList.prototype.toLocaleString =
        function () {
          return this.value;
        };
      DOMTokenList.prototype.add = function () {
        a: for (
          var v = 0,
            argLen = arguments.length,
            val = "",
            ele = this[" uCL"],
            proto = ele[" uCLp"];
          v !== argLen;
          ++v
        ) {
          (val = arguments[v] + ""), checkIfValidClassListEntry("add", val);
          for (var i = 0, Len = proto.length, resStr = val; i !== Len; ++i)
            if (this[i] === val) continue a;
            else resStr += " " + this[i];
          (this[Len] = val), (proto.length += 1), (proto.value = resStr);
        }
        (skipPropChange = 1),
          (ele.className = proto.value),
          (skipPropChange = 0);
      };
      DOMTokenList.prototype.remove = function () {
        for (
          var v = 0,
            argLen = arguments.length,
            val = "",
            ele = this[" uCL"],
            proto = ele[" uCLp"];
          v !== argLen;
          ++v
        ) {
          (val = arguments[v] + ""), checkIfValidClassListEntry("remove", val);
          for (
            var i = 0, Len = proto.length, resStr = "", is = 0;
            i !== Len;
            ++i
          )
            if (is) {
              this[i - 1] = this[i];
            } else {
              if (this[i] !== val) {
                resStr += this[i] + " ";
              } else {
                is = 1;
              }
            }
          if (!is) continue;
          delete this[Len], (proto.length -= 1), (proto.value = resStr);
        }
        (skipPropChange = 1),
          (ele.className = proto.value),
          (skipPropChange = 0);
      };
      window.DOMTokenList = DOMTokenList;
      function whenPropChanges() {
        var evt = window.event,
          prop = evt.propertyName;
        if (
          !skipPropChange &&
          (prop === "className" || (prop === "classList" && !defineProperty))
        ) {
          var target = evt.srcElement,
            protoObjProto = target[" uCLp"],
            strval = "" + target[prop];
          var tokens = strval.trim().split(wsRE),
            resTokenList = target[prop === "classList" ? " uCL" : "classList"];
          var oldLen = protoObjProto.length;
          a: for (
            var cI = 0, cLen = (protoObjProto.length = tokens.length), sub = 0;
            cI !== cLen;
            ++cI
          ) {
            for (var innerI = 0; innerI !== cI; ++innerI)
              if (tokens[innerI] === tokens[cI]) {
                sub++;
                continue a;
              }
            resTokenList[cI - sub] = tokens[cI];
          }
          for (var i = cLen - sub; i < oldLen; ++i) delete resTokenList[i]; //remove trailing indexs
          if (prop !== "classList") return;
          (skipPropChange = 1),
            (target.classList = resTokenList),
            (target.className = strval);
          (skipPropChange = 0), (resTokenList.length = tokens.length - sub);
        }
      }
      function polyfillClassList(ele) {
        if (!ele || !("innerHTML" in ele))
          throw TypeError("Illegal invocation");
        ele.detachEvent("onpropertychange", whenPropChanges); // prevent duplicate handler infinite loop
        allowTokenListConstruction = 1;
        try {
          function protoObj() {}
          protoObj.prototype = new DOMTokenList();
        } finally {
          allowTokenListConstruction = 0;
        }
        var protoObjProto = protoObj.prototype,
          resTokenList = new protoObj();
        a: for (
          var toks = ele.className.trim().split(wsRE),
            cI = 0,
            cLen = toks.length,
            sub = 0;
          cI !== cLen;
          ++cI
        ) {
          for (var innerI = 0; innerI !== cI; ++innerI)
            if (toks[innerI] === toks[cI]) {
              sub++;
              continue a;
            }
          this[cI - sub] = toks[cI];
        }
        (protoObjProto.length = cLen - sub),
          (protoObjProto.value = ele.className),
          (protoObjProto[" uCL"] = ele);
        if (defineProperty) {
          defineProperty(ele, "classList", {
            // IE8 & IE9 allow defineProperty on the DOM
            enumerable: 1,
            get: function () {
              return resTokenList;
            },
            configurable: 0,
            set: function (newVal) {
              (skipPropChange = 1),
                (ele.className = protoObjProto.value = newVal += ""),
                (skipPropChange = 0);
              var toks = newVal.trim().split(wsRE),
                oldLen = protoObjProto.length;
              a: for (
                var cI = 0,
                  cLen = (protoObjProto.length = toks.length),
                  sub = 0;
                cI !== cLen;
                ++cI
              ) {
                for (var innerI = 0; innerI !== cI; ++innerI)
                  if (toks[innerI] === toks[cI]) {
                    sub++;
                    continue a;
                  }
                resTokenList[cI - sub] = toks[cI];
              }
              for (var i = cLen - sub; i < oldLen; ++i) delete resTokenList[i]; //remove trailing indexs
            },
          });
          defineProperty(ele, " uCLp", {
            // for accessing the hidden prototype
            enumerable: 0,
            configurable: 0,
            writeable: 0,
            value: protoObj.prototype,
          });
          defineProperty(protoObjProto, " uCL", {
            enumerable: 0,
            configurable: 0,
            writeable: 0,
            value: ele,
          });
        } else {
          (ele.classList = resTokenList),
            (ele[" uCL"] = resTokenList),
            (ele[" uCLp"] = protoObj.prototype);
        }
        ele.attachEvent("onpropertychange", whenPropChanges);
      }
      try {
        // Much faster & cleaner version for IE8 & IE9:
        // Should work in IE8 because Element.prototype instanceof Node is true according to the specs
        window.Object.defineProperty(window.Element.prototype, "classList", {
          enumerable: 1,
          get: function (val) {
            if (!hasOwnProp.call(this, "classList")) polyfillClassList(this);
            return this.classList;
          },
          configurable: 0,
          set: function (val) {
            this.className = val;
          },
        });
      } catch (e) {
        // Less performant fallback for older browsers (IE 6-8):
        window[" uCL"] = polyfillClassList;
        // the below code ensures polyfillClassList is applied to all current and future elements in the doc.
        document.documentElement.firstChild.appendChild(
          document.createElement("style"),
        ).styleSheet.cssText =
          '_*{x-uCLp:expression(!this.hasOwnProperty("classList")&&window[" uCL"](this))}' + //  IE6
          '[class]{x-uCLp/**/:expression(!this.hasOwnProperty("classList")&&window[" uCL"](this))}'; //IE7-8
      }
    })(window);
  // 3. Patch in unsupported methods in DOMTokenList
  (function (DOMTokenListProto, testClass) {
    if (!DOMTokenListProto.item)
      DOMTokenListProto.item = function (i) {
        function NullCheck(n) {
          return n === void 0 ? null : n;
        }
        return NullCheck(this[i]);
      };
    if (!DOMTokenListProto.toggle || testClass.toggle("a", 0) !== false)
      DOMTokenListProto.toggle = function (val) {
        if (arguments.length > 1)
          return this[arguments[1] ? "add" : "remove"](val), !!arguments[1];
        var oldValue = this.value;
        return (
          this.remove(oldValue),
          oldValue === this.value && (this.add(val), true) /*|| false*/
        );
      };
    if (
      !DOMTokenListProto.replace ||
      typeof testClass.replace("a", "b") !== "boolean"
    )
      DOMTokenListProto.replace = function (oldToken, newToken) {
        checkIfValidClassListEntry("replace", oldToken),
          checkIfValidClassListEntry("replace", newToken);
        var oldValue = this.value;
        return (
          this.remove(oldToken),
          this.value !== oldValue && (this.add(newToken), true)
        );
      };
    if (!DOMTokenListProto.contains)
      DOMTokenListProto.contains = function (value) {
        for (var i = 0, Len = this.length; i !== Len; ++i)
          if (this[i] === value) return true;
        return false;
      };
    if (!DOMTokenListProto.forEach)
      DOMTokenListProto.forEach = function (f) {
        if (arguments.length === 1)
          for (var i = 0, Len = this.length; i !== Len; ++i)
            f(this[i], i, this);
        else
          for (
            var i = 0, Len = this.length, tArg = arguments[1];
            i !== Len;
            ++i
          )
            f.call(tArg, this[i], i, this);
      };
    if (!DOMTokenListProto.entries)
      DOMTokenListProto.entries = function () {
        var nextIndex = 0,
          that = this;
        return {
          next: function () {
            return nextIndex < that.length
              ? { value: [nextIndex, that[nextIndex++]], done: false }
              : { done: true };
          },
        };
      };
    if (!DOMTokenListProto.values)
      DOMTokenListProto.values = function () {
        var nextIndex = 0,
          that = this;
        return {
          next: function () {
            return nextIndex < that.length
              ? { value: that[nextIndex++], done: false }
              : { done: true };
          },
        };
      };
    if (!DOMTokenListProto.keys)
      DOMTokenListProto.keys = function () {
        var nextIndex = 0,
          that = this;
        return {
          next: function () {
            return nextIndex < that.length
              ? { value: nextIndex++, done: false }
              : { done: true };
          },
        };
      };
  })(
    window.DOMTokenList.prototype,
    window.document.createElement("div").classList,
  );
})(window);
```

### Mise en garde

La prothèse d'émulation est limitée dans sa fonctionnalité. Elle est actuellement incapable de traiter les éléments hors document (par exemple, les éléments créés par `document.createElement` avant d'être ajoutés à un nœud parent) dans IE6-7.

Cependant, elle devrait très bien fonctionner dans IE9. Une différence majeure entre la version prothésée de `classList` et les spécifications du W3 est que pour IE6-8, il n'y a pas moyen de créer un objet immuable (un objet dont les propriétés ne peuvent pas être directement modifiées). Dans IE9, en revanche, c'est possible en étendant le prototype, en gelant l'objet visible et en écrasant les méthodes de propriétés natives. Cependant, de telles actions ne fonctionneraient pas dans IE6-IE8 et, dans IE9, elles ralentiraient la performance de la page web entière au point de la faire ramper, rendant ces modifications complètement impraticables pour cette prothèse d'émulation.

Une note mineure est que dans IE6-7, cette prothèse utilise la propriété `window[" uCL"]` de l'objet window pour communiquer avec les expressions CSS, la propriété css `x-uCLp` sur tous les éléments, et la propriété `element[" uCL"]` sur tous les éléments pour permettre la collecte des déchets et augmenter les performances. Dans tous les navigateurs prothésés (IE6-9), une propriété `element[" uCLp"]` supplémentaire est ajoutée à l'élément pour garantir un prototypage conforme aux normes, et une propriété `DOMTokenList[" uCL"]` est ajoutée à chaque objet `element["classList"]` pour garantir que la `DOMTokenList` est liée à son propre élément.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("element.className")}}
- {{domxref("DOMTokenList")}}

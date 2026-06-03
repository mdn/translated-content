---
title: Exemple
slug: Web/SVG/Guides/Namespaces_crash_course/Example
l10n:
  sourceCommit: f2d281d86396bcd2dcecfdabd5837b1590132aa6
---

Dans cet exemple, nous utilisons {{Glossary("XHTML")}}, [SVG](/fr/docs/Web/SVG), [JavaScript](/fr/docs/Web/JavaScript) et le {{DOMxRef("Document_Object_Model", "DOM", "", 1)}} pour animer un essaim de «&nbsp;particules&nbsp;». Ces particules obéissent à deux principes de base. D'abord, chaque particule essaie de se déplacer vers le curseur de la souris, et ensuite chaque particule essaie de s'éloigner de la position moyenne des particules. Combinés, ces principes produisent ce comportement très naturel.

[Voir l'exemple <sup>(angl.)</sup>](https://mdn.dev/archives/media/samples/svg/swarm-of-motes.xhtml). L'exemple lié a été écrit selon les bonnes pratiques de 2006. L'exemple ci-dessous a été mis à jour avec les bonnes pratiques modernes de JavaScript. Les deux fonctionnent.

```xml
<?xml version='1.0'?>
<html xmlns="http://www.w3.org/1999/xhtml"
  xmlns:svg="http://www.w3.org/2000/svg">
  <head>
  <title>Un essaim de particules</title>
  <style>
  <![CDATA[
label,
input {
  width: 150px;
  display: block;
  float: left;
  margin-bottom: 10px;
}
label {
  text-align: right;
  width: 75px;
  padding-right: 20px;
}
br {
  clear: left;
}
  ]]>
  </style>
  </head>
  <body onload='update()'>
    <svg:svg id='display' width='400' height='300'>
      <svg:circle id='cursor' cx='200'
cy='150' r='7' fill='blue' fill-opacity='0.5'/>
    </svg:svg>

    <p>
      Un essaim de particules, régi par deux principes de base.
      D'abord, chaque particule essaie de se déplacer vers le curseur, et
      ensuite chaque particule essaie de s'éloigner de la position moyenne
      des particules. Combinés, ces principes produisent ce comportement
      très naturel.
    </p>

    <div>
    (C) 2006 <a id='email-me' href='#'>Nick Johnson</a>

    <script>
    <![CDATA[
      // foil spam bots
      let email = "@riovia.net";
      email = "nick" + email;
      document.getElementById("email-me").href = "mailto:" + email;
    ]]>
    </script>
    Ce logiciel est libre de droit vous pouvez l'utiliser de n'importe quelle manière,
    et il est fourni sans aucune garantie.
    </div>

    <form action="" onsubmit="return false;">
      <p>
      <label>Nombre de particules&nbsp;:</label>
        <input id='num_motes' value='5'/>
        <br/>

      <label>Vitesse maximale&nbsp;:</label>
        <input id='max_velocity' value='15'/>
        <br/>

      <label>Attraction vers le curseur&nbsp;:</label>
        <input id='attract_cursor' value='6'/>
        <br/>

      <label>Répulsion des autres&nbsp;:</label>
        <input id='repel_peer' value='5'/>
        <br/>
      </p>
    </form>

  <script>
  <![CDATA[
    // Tableau de particules
    let motes;

    // Récupère l'élément d'affichage
    function Display() {
      return document.getElementById("display");
    }

    // Détermine les dimensions de l'élément d'affichage
    // Retourne ceci sous forme de tableau [x, y]
    function Dimensions() {
      // Notre élément d'affichage
      const display = Display();
      const width = parseInt(display.getAttributeNS(null, "width"), 10);
      const height = parseInt(display.getAttributeNS(null, "height"), 10);

      return [width, height];
    }

    // Appelé lors des évènements de déplacement de la souris
    const mouse_x = 200;
    const mouse_y = 150;
    function OnMouseMove(evt) {
      mouse_x = evt.clientX;
      mouse_y = evt.clientY;

      const widget = document.getElementById("cursor");
      widget.setAttributeNS(null, "cx", mouse_x);
      widget.setAttributeNS(null, "cy", mouse_y);
    }
    document.onmousemove = OnMouseMove;

    // Détermine les coordonnées (x, y) du curseur
    function Cursor() {
      return [mouse_x, mouse_y];
    }

    // Détermine la moyenne (x, y) de l'essaim
    function AverageMotePosition() {
      if (!motes || motes.length === 0) {
        return [0, 0];
      }

      const sum_x = 0;
      const sum_y = 0;
      for (const mote of motes) {
        sum_x += mote.x;
        sum_y += mote.y;
      }

      return [sum_x / motes.length, sum_y / motes.length];
    }

    // Un entier aléatoire plus pratique
    function Rand(modulo) {
      return Math.round(Math.random() * (modulo - 1));
    }

    // Classe Particule
    function Mote() {
      // Dimensions de la zone de dessin
      const dims = Dimensions();
      const width = dims[0];
      const height = dims[1];

      // Choisit une coordonnée aléatoire pour commencer
      this.x = Rand(width);
      this.y = Rand(height);

      // Vitesse initiale nulle
      this.vx = this.vy = 0;

      // Élément visuel, initialement aucun
      this.elt = null;
    }

    // Transforme ceci en classe
    new Mote();

    // Mote::applyForce() — Ajuste la vitesse
    // vers la position donnée.
    // Attention : pseudo-physique — pas vraiment
    // régi par des principes physiques réels.
    Mote.prototype.applyForce = function (pos, mag) {
      if (pos[0] > this.x) {
        this.vx += mag;
      } else if (pos[0] < this.x) {
        this.vx -= mag;
      }

      if (pos[1] > this.y) {
        this.vy += mag;
      } else if (pos[1] < this.y) {
        this.vy -= mag;
      }
    };

    // Mote::capVelocity() — Applique une limite supérieure
    // à la vitesse de la particule.
    Mote.prototype.capVelocity = function () {
      const max = parseInt(document.getElementById("max_velocity").value, 10);

      if (max < this.vx) {
        this.vx = max;
      } else if (-max > this.vx) {
        this.vx = -max;
      }

      if (max < this.vy) {
        this.vy = max;
      } else if (-max > this.vy) {
        this.vy = -max;
      }
    };

    // Mote::capPosition() — Applique une limite supérieure/inférieure
    // à la position de la particule.
    Mote.prototype.capPosition = function () {
      const dims = Dimensions();
      if (this.x < 0) {
        this.x = 0;
      } else if (this.x >= dims[0]) {
        this.x = dims[0] - 1;
      }

      if (this.y < 0) {
        this.y = 0;
      } else if (this.y >= dims[1]) {
        this.y = dims[1] - 1;
      }
    };

    // Mote::move() — déplace une particule, met à jour l'écran
    Mote.prototype.move = function () {
      // Applique l'attraction vers le curseur
      const attract = parseInt(document.getElementById("attract_cursor").value, 10);
      const cursor = Cursor();
      this.applyForce(cursor, attract);

      // Applique la répulsion depuis la position moyenne des particules
      const repel = parseInt(document.getElementById("repel_peer").value, 10);
      const average = AverageMotePosition();
      this.applyForce(average, -repel);

      // Ajoute un peu d'aléatoire à la vitesse
      this.vx += Rand(3) - 1;
      this.vy += Rand(3) - 1;

      // Applique une limite supérieure à la vitesse
      this.capVelocity();

      // Applique la vitesse
      const old_x = this.x;
      const old_y = this.y;
      this.x += this.vx;
      this.y += this.vy;
      this.capPosition();

      // Dessine la particule
      if (this.elt === null) {
        const svg = "http://www.w3.org/2000/svg";
        this.elt = document.createElementNS(svg, "line");
        this.elt.setAttributeNS(null, "stroke", "green");
        this.elt.setAttributeNS(null, "stroke-width", "3");
        this.elt.setAttributeNS(null, "stroke-opacity", "0.5");
        Display().appendChild(this.elt);
      }

      this.elt.setAttributeNS(null, "x1", old_x);
      this.elt.setAttributeNS(null, "y1", old_y);

      this.elt.setAttributeNS(null, "x2", this.x);
      this.elt.setAttributeNS(null, "y2", this.y);
    };

    function update() {
      // Premier appel ?
      if (!motes) {
        motes = [];
      }

      // Combien de particules doivent être présentes ?
      let num = parseInt(document.getElementById("num_motes").value, 10);
      if (num < 0) {
        num = 0;
      }

      // S'assurer d'avoir exactement ce nombre...
      // Trop peu ?
      while (motes.length < num) {
        motes.push(new Mote());
      }

      // Ou trop ?
      if (num === 0) {
        motes = [];
      } else if (motes.length > num) {
        motes = motes.slice(0, num - 1);
      }

      // Déplace une particule aléatoire
      if (motes.length > 0) {
        motes[Rand(motes.length)].move();
      }

      // Et recommence toutes les 1/100 sec
      setTimeout(() => update(), 10);
    }
  ]]>
  </script>
  </body>
</html>
```

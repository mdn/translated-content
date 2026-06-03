---
title: WebDriver
slug: Web/WebDriver
l10n:
  sourceCommit: 2d19a88d0cc560f031a07585bf57f005fec02670
---

WebDriver est une interface de contrôle à distance qui permet l'introspection et le contrôle des agents utilisateurs. Il fournit un protocole filaire indépendant de la plate-forme et du langage, permettant aux programmes hors processus de contrôler à distance le comportement des navigateurs web.

La possibilité d'écrire des jeux d'instructions pouvant être exécutés de manière interchangeable dans de nombreux navigateurs sur différentes plateformes est essentielle pour offrir une expérience cohérente aux utilisateur·ice·s. Avec la nouvelle vague de développements sur la plateforme web, la diversité croissante des appareils et les exigences en matière d'interopérabilité réelle entre les technologies, WebDriver fournit des outils pour [les tests en navigateur croisé](/fr/docs/Learn_web_development/Extensions/Testing/Introduction).

Il fournit un ensemble d'interfaces permettant de découvrir et de manipuler des éléments DOM dans des documents Web et de contrôler le comportement d'un agent utilisateur. Il est principalement destiné à permettre aux auteurs Web d'écrire des tests qui automatisent un agent utilisateur à partir d'un processus de contrôle distinct, mais peut également être utilisé de manière à permettre à des scripts intégrés au navigateur de contrôler un navigateur — éventuellement distinct.

## Utilisation

Alors, que vous permet de faire WebDriver et à quoi ressemble-t-il&nbsp;? Étant donné que WebDriver est indépendant du langage de programmation, la réponse à cette question dépend du client WebDriver que vous utilisez et du langage choisi.

Mais si vous utilisez un client populaire écrit en Python, votre interaction avec WebDriver pourrait ressembler à ceci&nbsp;:

```python
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support.expected_conditions import presence_of_element_located

with webdriver.Firefox() as driver:

    driver.get("https://google.com/ncr")
    wait = WebDriverWait(driver, 10)
    driver.find_element(By.NAME, "q").send_keys(f"fromage{Keys.RETURN}")
    wait.until(presence_of_element_located((By.XPATH, '//*[@id="rcnt"]')))
    results = driver.find_elements(By.XPATH, "//a[@href]")

    for i, elem in enumerate(results):
        print(f'#{i} {elem.text} ({elem.get_attribute("href")})')
```

Cela pourrait produire un résultat similaire à celui-ci&nbsp;:

```plain
#1 Fromage - Wikipedia (https://fr.wikipedia.org/wiki/Fromage)
```

## Référence

La référence [WebDriver](/fr/docs/Web/WebDriver/Reference) fournit des informations détaillées sur l'API WebDriver, notamment les commandes disponibles, les fonctionnalités et les erreurs.

- [Délais d'expiration](/fr/docs/Web/WebDriver/Reference/Timeouts)

### [Commandes](/fr/docs/Web/WebDriver/Reference/Commands)

{{ListSubpages("/fr/docs/Web/WebDriver/Reference/Commands")}}

### [Capacités](/fr/docs/Web/WebDriver/Reference/Capabilities)

{{ListSubpages("/fr/docs/Web/WebDriver/Reference/Capabilities")}}

### [Erreurs](/fr/docs/Web/WebDriver/Reference/Errors)

{{ListSubpages("/fr/docs/Web/WebDriver/Reference/Errors")}}

## Spécifications

- [WebDriver <sup>(angl.)</sup>](https://w3c.github.io/webdriver/)

## Voir aussi

- [Tester](/fr/docs/Learn_web_development/Extensions/Testing)
- [Documentation de Selenium](https://www.selenium.dev/documentation/)

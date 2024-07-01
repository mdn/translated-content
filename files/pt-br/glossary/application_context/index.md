---
title: Application Context
slug: Glossary/Application_context
---

{{GlossarySidebar}}

Um **application context** de nível superior é um [contexto de navegação](/pt-BR/docs/Glossary/Browsing_context) que tem um [manifest](/pt-BR/docs/Web/Manifest)

Se um _application context_ for criado como resultado da solicitação do user agent para navegar para um link direto, o user agent deverá navegar imediatamente para o link direto com a substituição habilitada. Caso contrário, quando o contexto do aplicativo for criado, o user agent deverá navegar imediatamente para a URL inicial com a substituição ativada.

Observe que o URL inicial não é necessariamente o valor do membro start_url: o usuário ou user agent pode tê-lo alterado quando o aplicativo foi adicionado à tela inicial ou marcado de outra forma.

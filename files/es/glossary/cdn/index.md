---
title: CDN
slug: Glossary/CDN
---

{{GlossarySidebar}}

Una **Red de distribución de contenidos** (_CDN en inglés_) es un grupo de servidores distribuidos en muchas ubicaciones. Estos servidores almacenan copias duplicadas de datos para que los servidores puedan cumplir con las solicitudes de datos en función de qué servidores están más cerca de los respectivos usuarios finales. Las CDN hacen que el servicio rápido se vea menos afectado por el alto tráfico.

Los CDN se usan ampliamente para entregar hojas de estilo y archivos Javascript (activos estáticos) de bibliotecas como Bootstrap, jQuery, etc. Es preferible usar CDN para esos archivos de biblioteca por varias razones:

- Servir los activos estáticos de las bibliotecas a través de CDN reduce la carga de solicitudes en nuestros propios servidores.
- La mayoría de las CDN tienen servidores en todo el mundo, por lo que los servidores de CDN pueden estar geográficamente más cerca de sus usuarios que sus propios servidores. La distancia geográfica afecta la latencia proporcionalmente.
- Los CDN ya están configurados con la configuración de caché adecuada. El uso de un CDN guarda más configuraciones para activos estáticos en sus propios servidores.

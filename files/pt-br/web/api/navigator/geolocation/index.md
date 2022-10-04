---
title: Navigator.geolocation
slug: Web/API/Navigator/geolocation
translation_of: Web/API/Navigator/geolocation
---
{{APIRef("Geolocation API")}}

A propriedade de apenas leitura **`Navigator.geolocation`** retorna um objeto {{domxref("Geolocation")}} que disponibiliza acesso de conteúdo Web à localização do dispositivo. Isso permite que um Web site ou aplicativo ofereçam resultados customizados baseado na localização do usuário.

> **Nota:** Por questão de segurança, quando uma página web tenta acessar as informações de localização, o usuário é notificado e lhe é perguntado se este garante permissão. Esteja alerta que cada navegador possui suas próprias políticas e métodos para requisitar permissão.

## Sintaxe

```
geo = navigator.geolocation
```

## Especificações

| Especificação                                                                            | Situação                         | Comentário        |
| ---------------------------------------------------------------------------------------- | -------------------------------- | ----------------- |
| {{SpecName('Geolocation', '#navi-geo', 'Navigator.geolocation')}} | {{Spec2('Geolocation')}} | Definição inicial |

## Compatibilidade com navegadores

{{Compat("api.Navigator.geolocation")}}

Veja também

- [Utilizar geolocalização](/pt-BR/docs/WebAPI/Using_geolocation)

# Bradesco Prime Clone

Réplica pixel-perfect da home do Bradesco Prime ([banco.bradesco/html/prime/index.shtm](https://banco.bradesco/html/prime/index.shtm)).

Desenvolvido como teste de processo seletivo.

## Stack
- HTML5 semântico
- CSS3 puro (sem frameworks)
- JavaScript vanilla (sem libs)

## Estrutura
```
├── index.html          # Estrutura semântica completa
├── style.css           # Estilos responsivos (desktop + mobile)
├── script.js           # Carrossel, menus, scroll, drawers
└── assets/img/         # 11 imagens originais do Bradesco
```

## Funcionalidades
- **Carrossel hero** com 4 banners reais (Crédito, IR, Seguro Vida, Previdência) + auto-play 6s
- **Dropdowns** do nav superior (Outros Perfis / Pra sua Empresa)
- **Menu lateral** com 6 items + submenus hover/click
- **Busca fullscreen** com seções "Mais Buscados" e "Separamos para você"
- **Header fixo** com mudança de cor ao scroll
- **Mobile responsivo**:
  - Banners verticais (via `<picture>` srcset)
  - Header fixed com logo/busca/hamburger
  - Barra "Prime" que desaparece ao scroll
  - Drawer fullscreen do hamburger (substitui header)
  - Drawer "Prime" separado (perfis + empresa)
- **Footer** com accordions (Informações Úteis, BIA)
- **Acessibilidade**: aria-labels, role, semântica

## Rodar localmente
```bash
# Qualquer servidor HTTP estático, ex:
python3 -m http.server 8787
# ou
npx serve .
```
Acesse http://localhost:8787

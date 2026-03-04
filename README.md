# Portfolio TOWANOU Billy

Portfolio moderne et professionnel pour développeur web Full Stack spécialisé en Laravel et React.

## Configuration EmailJS

Pour activer l'envoi d'emails via les formulaires de contact et de commande de projet, suivez ces étapes :

### 1. Créer un compte EmailJS

1. Allez sur [https://www.emailjs.com/](https://www.emailjs.com/)
2. Créez un compte gratuit (jusqu'à 200 emails/mois)

### 2. Configurer un service email

1. Dans le dashboard EmailJS, allez dans **Email Services**
2. Cliquez sur **Add New Service**
3. Choisissez votre fournisseur email (Gmail, Outlook, etc.)
4. Suivez les instructions pour connecter votre compte
5. Notez votre **Service ID**

### 3. Créer les templates d'email

#### Template pour les commandes de projet

1. Allez dans **Email Templates**
2. Cliquez sur **Create New Template**
3. Configurez le template :

**Subject:** `Nouvelle commande de projet - {{from_name}}`

**Body:**
```
Nouvelle commande de projet reçue !

Nom: {{from_name}}
Email: {{from_email}}
Type de projet: {{project_type}}
Budget estimatif: {{budget}}
Délai souhaité: {{deadline}}

Description du projet:
{{message}}
```

4. Notez le **Template ID**

#### Template pour le formulaire de contact

1. Créez un autre template
2. Configurez-le :

**Subject:** `Nouveau message de contact - {{from_name}}`

**Body:**
```
Nouveau message reçu !

Nom: {{from_name}}
Email: {{from_email}}

Message:
{{message}}
```

3. Notez le **Template ID**

### 4. Récupérer votre Public Key

1. Allez dans **Account** > **General**
2. Copiez votre **Public Key**

### 5. Configurer le projet

Ouvrez le fichier `/src/app/config/emailjs.ts` et remplacez les valeurs suivantes :

```typescript
export const EMAILJS_CONFIG = {
  PUBLIC_KEY: "votre_public_key",
  SERVICE_ID: "votre_service_id",
  ORDER_TEMPLATE_ID: "votre_order_template_id",
  CONTACT_TEMPLATE_ID: "votre_contact_template_id",
};
```

### 6. Tester les formulaires

1. Remplissez le formulaire de commande ou de contact
2. Vérifiez que l'email est bien reçu à l'adresse billytowanou@gmail.com

## Caractéristiques

- ✅ Design noir et blanc minimaliste et professionnel
- ✅ Animations fluides au scroll avec Motion
- ✅ Responsive (mobile et desktop)
- ✅ Section Hero avec effet d'apparition
- ✅ Section À propos
- ✅ Compétences techniques organisées en 3 colonnes
- ✅ Projets avec images réelles et effets hover
- ✅ Formulaire de commande de projet connecté à EmailJS
- ✅ Formulaire de contact connecté à EmailJS
- ✅ Footer minimaliste

## Technologies utilisées

- React
- TypeScript
- Tailwind CSS
- Motion (animations)
- EmailJS (envoi d'emails)
- Lucide React (icônes)

## Déploiement

Ce site peut être déployé facilement sur :
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

---

© 2026 TOWANOU Billy - Développeur Web Full Stack

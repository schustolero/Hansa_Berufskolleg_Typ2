// MASTER-v27 – zentrale Systemkonfiguration und Startwerte für die Shopverwaltung.
window.CENTRAL_CONFIG = {
  adminEmail: "shirtzentrale@gmail.com",
  adminTitle: "Shirtprojekt – Zentrale",
  defaultShop: "hansa",
  orderEmail: "shirtzentrale@gmail.com",
  seedShops: {
    "hansa": {
      customerId:"hansa",
      customerName:"Hansa Berufskolleg",
      pageTitle:"Hansa Berufskolleg – T-Shirt Shop",
      brandTitle:"Hansa Berufskolleg",
      brandSubtitle:"T-Shirt Konfigurator",
      designerHeading:"Shirt gestalten",
      designerIntro:"Motiv auswählen, Farbe bestimmen und Shirt konfigurieren.",
      accentColor:"#1f3f76",
      logoFile:"shop-logo.jpg",
      logoHeight:90,
      shirtPrice:15,
      currency:"EUR",
      orderEmail:"shirtzentrale@gmail.com",
      orderSubject:"Neue Hansa Berufskolleg T-Shirt Bestellung",
      customerExtraFieldLabel:"Adresse",
      customerExtraFieldName:"Adresse",
      orderPrefix:"HAN",
      shopType:"motifs",
      active:true,
      features:{
        layout:"compact",
        motifMode:"multiple",
        allowCustomerUpload:false,
        allowText:false,
        allowMoveMotif:false,
        allowResizeMotif:false,
        allowRotateMotif:false,
        allowBackDesign:true,
        allowMotifColor:true,
        showShirtColorPicker:true,
        showMotifPicker:true,
        showMotifColorPicker:true,
        autoSelectSingleMotif:false,
        maxUploadMB:8,
        previewMode:"single"
      },
      motifs:[
        {id:"college",name:"Hansa College",file:"motiv-1.png"},
        {id:"script",name:"Hansa Script",file:"motiv-2.png"}
      ]
    }
  }
};

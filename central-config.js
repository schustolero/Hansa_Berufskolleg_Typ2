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
    },
    "_simple": {customerId:"_simple",customerName:"Vorlage Simple",pageTitle:"Simple Shop",brandTitle:"Simple Shop",brandSubtitle:"Vorlage",designerHeading:"Shirt auswählen",designerIntro:"Ein festes Motiv – einfach bestellen.",accentColor:"#111111",logoFile:"shop-logo.png",logoHeight:90,shirtPrice:15,currency:"EUR",orderEmail:"shirtzentrale@gmail.com",orderSubject:"Neue Bestellung",customerExtraFieldLabel:"Adresse",customerExtraFieldName:"Adresse",orderPrefix:"SIM",shopType:"simple",active:true,features:{layout:"simple",motifMode:"single",allowCustomerUpload:false,allowText:false,allowMoveMotif:false,allowResizeMotif:false,allowRotateMotif:false,allowBackDesign:true,allowMotifColor:true,showShirtColorPicker:true,showMotifPicker:false,showMotifColorPicker:true,autoSelectSingleMotif:true,maxUploadMB:8,previewMode:"single"},motifs:[{id:"motiv1",name:"Vereinslogo",file:"motiv-1.png"}]},
    "_motifs": {customerId:"_motifs",customerName:"Vorlage Motive",pageTitle:"Motiv Shop",brandTitle:"Motiv Shop",brandSubtitle:"Vorlage",designerHeading:"Motiv auswählen",designerIntro:"Mehrere Motive zur Auswahl.",accentColor:"#111111",logoFile:"shop-logo.png",logoHeight:90,shirtPrice:15,currency:"EUR",orderEmail:"shirtzentrale@gmail.com",orderSubject:"Neue Bestellung",customerExtraFieldLabel:"Adresse",customerExtraFieldName:"Adresse",orderPrefix:"MOT",shopType:"motifs",active:true,features:{layout:"compact",motifMode:"multiple",allowCustomerUpload:false,allowText:false,allowMoveMotif:false,allowResizeMotif:false,allowRotateMotif:false,allowBackDesign:true,allowMotifColor:true,showShirtColorPicker:true,showMotifPicker:true,showMotifColorPicker:true,autoSelectSingleMotif:false,maxUploadMB:8,previewMode:"single"},motifs:[{id:"motiv1",name:"Motiv 1",file:"motiv-1.png"},{id:"motiv2",name:"Motiv 2",file:"motiv-2.png"}]},
    "_standard": {customerId:"_standard",customerName:"Vorlage Standard",pageTitle:"Textilshop 2 – Standard",brandTitle:"Textilshop 2 – Standard",brandSubtitle:"Vorlage",designerHeading:"Textil auswählen",designerIntro:"Produkte, Farben und Motive auswählen.",accentColor:"#111111",logoFile:"shop-logo.png",logoHeight:90,shirtPrice:15,currency:"EUR",orderEmail:"shirtzentrale@gmail.com",orderSubject:"Neue Bestellung",customerExtraFieldLabel:"Adresse",customerExtraFieldName:"Adresse",orderPrefix:"STD",shopType:"motifs",active:true,features:{layout:"compact",motifMode:"multiple",allowCustomerUpload:false,allowText:false,allowMoveMotif:false,allowResizeMotif:false,allowRotateMotif:false,allowBackDesign:true,allowMotifColor:true,showShirtColorPicker:true,showMotifPicker:true,showMotifColorPicker:true,autoSelectSingleMotif:false,maxUploadMB:8,previewMode:"single"},motifs:[{id:"motiv1",name:"Motiv 1",file:"motiv-1.png"},{id:"motiv2",name:"Motiv 2",file:"motiv-2.png"}]},
    "_designer": {customerId:"_designer",customerName:"Vorlage Designer",pageTitle:"Designer Shop",brandTitle:"Designer Shop",brandSubtitle:"Vorlage",designerHeading:"Shirt frei gestalten",designerIntro:"Logo hochladen, Text ergänzen und frei gestalten.",accentColor:"#111111",logoFile:"shop-logo.png",logoHeight:90,shirtPrice:15,currency:"EUR",orderEmail:"shirtzentrale@gmail.com",orderSubject:"Neue Bestellung",customerExtraFieldLabel:"Adresse",customerExtraFieldName:"Adresse",orderPrefix:"DES",shopType:"designer",active:true,features:{layout:"designer",motifMode:"mixed",allowCustomerUpload:true,allowText:true,allowMoveMotif:true,allowResizeMotif:true,allowRotateMotif:true,allowBackDesign:true,allowMotifColor:true,showShirtColorPicker:true,showMotifPicker:true,showMotifColorPicker:true,autoSelectSingleMotif:false,maxUploadMB:8,previewMode:"single"},motifs:[{id:"motiv1",name:"Beispielmotiv",file:"motiv-1.png"}]}
  }
};

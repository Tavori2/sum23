﻿	var aliasConfig = {
appName : ["", "", ""],
totalPageCount : [],
largePageWidth : [],
largePageHeight : [],
normalPath : [],
largePath : [],
thumbPath : [],

ToolBarsSettings:[],
TitleBar:[],
appLogoIcon:["appLogoIcon"],
appLogoLinkURL:["appLogoLinkURL"],
bookTitle : [],
bookDescription : [],
ButtonsBar : [],
ShareButton : [],
ShareButtonVisible : ["socialShareButtonVisible"],
ThumbnailsButton : [],
ThumbnailsButtonVisible : ["enableThumbnail"],
ZoomButton : [],
ZoomButtonVisible : ["enableZoomIn"],
FlashDisplaySettings : [],
MainBgConfig : [],
bgBeginColor : ["bgBeginColor"],
bgEndColor : ["bgEndColor"],
bgMRotation : ["bgMRotation"],
backGroundImgURL : ["mainbgImgUrl","innerMainbgImgUrl"],
pageBackgroundColor : ["pageBackgroundColor"],
flipshortcutbutton : [],
BookMargins : [],
topMargin : [],
bottomMargin : [],
leftMargin : [],
rightMargin : [],
HTMLControlSettings : [],
linkconfig : [],
LinkDownColor : ["linkOverColor"],
LinkAlpha : ["linkOverColorAlpha"],
OpenWindow : ["linkOpenedWindow"],
searchColor : [],
searchAlpha : [],
SearchButtonVisible : ["searchButtonVisible"],

productName : [],
homePage : [],
enableAutoPlay : ["autoPlayAutoStart"],
autoPlayDuration : ["autoPlayDuration"],
autoPlayLoopCount : ["autoPlayLoopCount"],
BookMarkButtonVisible : [],
googleAnalyticsID : ["googleAnalyticsID"],
OriginPageIndex : [],	
HardPageEnable : ["isHardCover"],	
UIBaseURL : [],	
RightToLeft: ["isRightToLeft"],	

LeftShadowWidth : ["leftPageShadowWidth"],	
LeftShadowAlpha : ["pageShadowAlpha"],
RightShadowWidth : ["rightPageShadowWidth"],
RightShadowAlpha : ["pageShadowAlpha"],
ShortcutButtonHeight : [],	
ShortcutButtonWidth : [],
AutoPlayButtonVisible : ["enableAutoPlay"],	
DownloadButtonVisible : ["enableDownload"],	
DownloadURL : ["downloadURL"],
HomeButtonVisible :["homeButtonVisible"],
HomeURL:['btnHomeURL'],
BackgroundSoundURL:['bacgroundSoundURL'],
//TableOfContentButtonVisible:["BookMarkButtonVisible"],
PrintButtonVisible:["enablePrint"],
toolbarColor:["mainColor","barColor"],
loadingBackground:["mainColor","barColor"],
BackgroundSoundButtonVisible:["enableFlipSound"],
FlipSound:["enableFlipSound"],
MiniStyle:["userSmallMode"],
retainBookCenter:["moveFlipBookToCenter"],
totalPagesCaption:["totalPageNumberCaptionStr"],
pageNumberCaption:["pageIndexCaptionStrs"]
};
var aliasLanguage={
frmPrintbtn:["frmPrintCaption"],
frmPrintall : ["frmPrintPrintAll"],
frmPrintcurrent : ["frmPrintPrintCurrentPage"],
frmPrintRange : ["frmPrintPrintRange"],
frmPrintexample : ["frmPrintExampleCaption"],
btnLanguage:["btnSwicthLanguage"],
btnTableOfContent:["btnBookMark"]
}
;
	var bookConfig = {
	appName:'flippdf',
	totalPageCount : 0,
	largePageWidth : 1080,
	largePageHeight : 1440,
	normalPath : "files/page/",
	largePath : "files/large/",
	thumbPath : "files/thumb/",
	
	ToolBarsSettings:"",
	TitleBar:"",
	appLogoLinkURL:"",
	bookTitle:"FLIPBUILDER",
	bookDescription:"",
	ButtonsBar:"",
	ShareButton:"",
	
	ThumbnailsButton:"",
	ThumbnailsButtonVisible:"Show",
	ZoomButton:"",
	ZoomButtonVisible:"Yes",
	FlashDisplaySettings:"",
	MainBgConfig:"",
	bgBeginColor:"#cccccc",
	bgEndColor:"#eeeeee",
	bgMRotation:45,
	pageBackgroundColor:"#FFFFFF",
	flipshortcutbutton:"Show",
	BookMargins:"",
	topMargin:10,
	bottomMargin:10,
	leftMargin:10,
	rightMargin:10,
	HTMLControlSettings:"",
	linkconfig:"",
	LinkDownColor:"#808080",
	LinkAlpha:0.5,
	OpenWindow:"_Blank",

	BookMarkButtonVisible:'true',
	productName : 'Demo created by Flip PDF',
	homePage : 'http://www.flipbuilder.com/',
	isFlipPdf : "true",
	TableOfContentButtonVisible:"true",
	searchTextJS:'javascript/search_config.js',
	searchPositionJS:undefined
};
	
	
	;bookConfig.BookTemplateName="metro";bookConfig.loadingCaptionColor="#DDDDDD";bookConfig.loadingBackground="#323232";bookConfig.appLogoIcon="files/mobile-ext/appLogoIcon.png";bookConfig.appLogoLinkURL="http://tavori2.com";bookConfig.appLogoOpenWindow="Blank";bookConfig.logoHeight="40";bookConfig.logoPadding="15";bookConfig.logoTop="0";bookConfig.toolbarColor="#000000";bookConfig.iconColor="#ECF5FB";bookConfig.pageNumColor="#000000";bookConfig.iconFontColor="#C6C6C6";bookConfig.toolbarAlwaysShow="No";bookConfig.formFontColor="#FFFFFF";bookConfig.formBackgroundColor="#27181A";bookConfig.ToolBarAlpha="0.5";bookConfig.CurlingPageCorner="Yes";bookConfig.showBookInstructionOnStart="false";bookConfig.InstructionsButtonVisible="Hide";bookConfig.showInstructionOnStart="No";bookConfig.showGotoButtonsAtFirst="No";bookConfig.QRCode="Hide";bookConfig.HomeButtonVisible="Hide";bookConfig.HomeURL="%first page%";bookConfig.aboutButtonVisible="Hide";bookConfig.enablePageBack="Hide";bookConfig.ShareButtonVisible="Hide";shareObj = [];bookConfig.isInsertFrameLinkEnable=" Hide";bookConfig.addCurrentPage="No";bookConfig.EmailButtonVisible="Hide";bookConfig.btnShareWithEmailBody="{link}";bookConfig.ThumbnailsButtonVisible="Hide";bookConfig.thumbnailColor="#333333";bookConfig.thumbnailAlpha="70";bookConfig.BookMarkButtonVisible="Hide";bookConfig.TableOfContentButtonVisible="Hide";bookConfig.isHideTabelOfContentNodes="yes";bookConfig.SearchButtonVisible="Hide";bookConfig.leastSearchChar="3";bookConfig.searchKeywordFontColor="#FFB000";bookConfig.searchHightlightColor="#ffff00";bookConfig.SelectTextButtonVisible="Hide";bookConfig.PrintButtonVisible="Hide";bookConfig.BackgroundSoundButtonVisible="Hide";bookConfig.FlipSound="No";bookConfig.BackgroundSoundLoop="-1";bookConfig.AutoPlayButtonVisible="Hide";bookConfig.autoPlayAutoStart="No";bookConfig.autoPlayDuration="9";bookConfig.autoPlayLoopCount="1";bookConfig.ZoomButtonVisible="Hide";bookConfig.maxZoomWidth="1400";bookConfig.defaultZoomWidth="1000";bookConfig.mouseWheelFlip="Yes";bookConfig.ZoomMapVisible="Hide";bookConfig.DownloadButtonVisible="Hide";bookConfig.PhoneButtonVisible="Hide";bookConfig.AnnotationButtonVisible="Hide";bookConfig.FullscreenButtonVisible="Hide";bookConfig.MagnifierButtonVisible="Hide";bookConfig.bgBeginColor="#E2E2E2";bookConfig.bgEndColor="#E2E2E2";bookConfig.bgMRotation="90";bookConfig.backGroundImgURL="files/mobile-ext/backGroundImgURL.jpg";bookConfig.backgroundPosition="stretch";bookConfig.backgroundOpacity="100";bookConfig.backgroundScene="None";bookConfig.LeftShadowWidth="90";bookConfig.LeftShadowAlpha="0.6";bookConfig.RightShadowWidth="55";bookConfig.RightShadowAlpha="0.6";bookConfig.ShowTopLeftShadow="Yes";bookConfig.HardPageEnable="No";bookConfig.hardCoverBorderWidth="8";bookConfig.borderColor="#572F0D";bookConfig.outerCoverBorder="Yes";bookConfig.cornerRound="8";bookConfig.leftMarginOnMobile="0";bookConfig.topMarginOnMobile="0";bookConfig.rightMarginOnMobile="0";bookConfig.bottomMarginOnMobile="0";bookConfig.pageBackgroundColor="#E8E8E8";bookConfig.flipshortcutbutton="Show";bookConfig.BindingType="side";bookConfig.RightToLeft="Yes";bookConfig.FlipDirection="0";bookConfig.flippingTime="0.6";bookConfig.retainBookCenter="Yes";bookConfig.FlipStyle="Flip";bookConfig.autoDoublePage="Yes";bookConfig.isTheBookOpen="No";bookConfig.thicknessWidthType="Thinner";bookConfig.thicknessColor="#ffffff";bookConfig.SingleModeBanFlipToLastPage="No";bookConfig.showThicknessOnMobile="No";bookConfig.isSingleBookFullWindowOnMobile="no";bookConfig.isStopMouseMenu="yes";bookConfig.restorePageVisible="No";bookConfig.topMargin="10";bookConfig.bottomMargin="10";bookConfig.leftMargin="10";bookConfig.rightMargin="10";bookConfig.hideMiniFullscreen="no";bookConfig.maxWidthToSmallMode="400";bookConfig.maxHeightToSmallMode="300";bookConfig.leftRightPnlShowOption="None";bookConfig.highDefinitionConversion="yes";bookConfig.LargeLogoPosition="top-left";bookConfig.LargeLogoTarget="Blank";bookConfig.isFixLogoSize="No";bookConfig.logoFixWidth="0";bookConfig.logoFixHeight="0";bookConfig.SupportOperatePageZoom="No";bookConfig.showHelpContentAtFirst="No";bookConfig.updateURLForPage="No";bookConfig.LinkDownColor="#800080";bookConfig.LinkAlpha="0.2";bookConfig.OpenWindow="Blank";bookConfig.showLinkHint="No";bookConfig.MidBgColor="#744835";bookConfig.useTheAliCloudChart ="no";bookConfig.totalPageCount=21;bookConfig.largePageWidth=1800;bookConfig.largePageHeight=3116;;bookConfig.securityType="1";bookConfig.CreatedTime ="231123170101";bookConfig.bookTitle="סיכום שנה 2023";bookConfig.bookmarkCR="8acaabd30c303d0f43eebbf795173bc19538f368";bookConfig.productName="Flip PDF Professional";bookConfig.homePage="http://www.flipbuilder.com";bookConfig.searchPositionJS="mobile/javascript/text_position[1].js";bookConfig.searchTextJS="mobile/javascript/search_config.js";bookConfig.normalPath="files/mobile/";bookConfig.largePath="files/mobile/";bookConfig.thumbPath="files/thumb/";bookConfig.userListPath="files/extfiles/users.js";bookConfig.UIBaseURL='mobile/';var language = [{ language : "Hebrew",btnFirstPage:"ראשון",btnNextPage:"הבא",btnLastPage:"אחרון",btnPrePage:"הקודם",btnDownload:"הורד",btnPrint:"הדפסה",btnSearch:"חיפוש",btnClearSearch:"נקה",frmSearchPrompt:"Clear",btnBookMark:"תוכן העניינים",btnHelp:"עזרה",btnHome:"Home",btnFullScreen:"מסך מלא",btnDisableFullScreen:"ביטול מסך מלא",btnSoundOn:"הפעל קול",btnSoundOff:"כיבוי קול",btnShareEmail:"שלח",btnSocialShare:"שתף",btnZoomIn:"הגדלה",btnZoomOut:"הקטנה",btnDragToMove:"גרירה עם העכבר",btnAutoFlip:"דפדוף אוטומטי",btnStopAutoFlip:"ביטול דפדוף אוטומטי",btnGoToHome:"עמוד הבית",frmHelpCaption:"עזרה",frmHelpTip1:"הקלק פעמיים להגדלה או הקטנה",frmHelpTip2:"גרור את פינת הדף להצגה",frmPrintCaption:"הדפסה",frmPrintBtnCaption:"הדפסה",frmPrintPrintAll:"הדפס כל העמודים",frmPrintPrintCurrentPage:"הדפס עמוד נוכחי",frmPrintPrintRange:"הדפס טווח עמודים",frmPrintExampleCaption:"לדוגמה: 2,5,8-16",frmPrintPreparePage:"הכנת עמוד:",frmPrintPrintFailed:"הדפסה נכשלה:",pnlSearchInputInvalid:"(אורך מינימלי  הוא 3 סמלים)",loginCaption:"התחברות",loginInvalidPassword:"סיסמה לא חוקית!",loginPasswordLabel:"סיסמה:",loginBtnLogin:"התחברות",loginBtnCancel:"ביטול",btnThumb:"תמונות ממוזערות לתצוגה מקדימה",lblPages:"עמודים:",lblPagesFound:"עמודים:",lblPageIndex:"עמוד",btnAbout:"אודות",frnAboutCaption:"אודות וצור קשר",btnSinglePage:"עמוד בודד",btnDoublePage:"עמוד כפול",btnSwicthLanguage:"החלף שפה",tipChangeLanguage:"בחר שפה ...",btnMoreOptionsLeft:"אפשרויות",btnMoreOptionsRight:"אפשרויות",btnFit:"התאם חלון",smallModeCaption:"לחץ לצפייה במסך מלא",btnAddAnnotation:"הערות והדגשות",btnAnnotation:"הערות והדגשות",FlipPageEditor_SaveAndExit:"לשמור ולצאת",FlipPageEditor_Exit:"יציאה",DrawToolWindow_Redo:"בצע שוב",DrawToolWindow_Undo:"חזרה",DrawToolWindow_Clear:"נקה",DrawToolWindow_Brush:"מברשת",DrawToolWindow_Width:"רוחב",DrawToolWindow_Alpha:"אלפא",DrawToolWindow_Color:"צבע",DrawToolWindow_Eraser:"מחק",DrawToolWindow_Rectangular:"מלבני",DrawToolWindow_Ellipse:"אליפסה",TStuff_BorderWidth:"גבול רוחב",TStuff_BorderAlph:"אלפא",TStuff_BorderColor:"צבע גבול",DrawToolWindow_TextNote:"הערת טקסט",AnnotMark:"סימניה",lastpagebtnHelp:"עמוד אחרון",firstpagebtnHelp:"עמוד ראשון",homebtnHelp:"דף הבית",aboubtnHelp:"אודות",screenbtnHelp:"מסך מלא",helpbtnHelp:"הצג עזרה",searchbtnHelp:"חיפוש",pagesbtnHelp:"עמודים ממוזערים",bookmarkbtnHelp:"סימניות",AnnotmarkbtnHelp:"תוכן עניינים",printbtnHelp:"הדפסה",soundbtnHelp:"הפעלת/ביטול קול",sharebtnHelp:"שלח דואר אלקטרוני ל",socialSharebtnHelp:" שיתוף חברתי",zoominbtnHelp:"זום-הגדלה",downloadbtnHelp:"הורד חוברת זו",pagemodlebtnHelp:"מצב עמוד יחיד או כפול",languagebtnHelp:"החלף שפה",annotationbtnHelp:"הערה/הדגשה",addbookmarkbtnHelp:"הערה/הדגשה",removebookmarkbtnHelp:"הסרת הערה/הדגשה",updatebookmarkbtnHelp:"עדכן סימנייה",btnShoppingCart:"עגלת קניות",Help_ShoppingCartbtn:"עגלת קנייות",Help_btnNextPage:"עמוד הבא",Help_btnPrePage:"עמוד קודם",Help_btnAutoFlip:"דפדדוף אוטומטי",Help_StopAutoFlip:"הפסקת דפדוף אואומטי",btnaddbookmark:"הוספת סימנייה",btndeletebookmark:"מחק סימנייה",btnupdatebookmark:"עדכון סימנייה",frmyourbookmarks:"הסימניות שלך",frmitems:"פריטים",DownloadFullPublication:"כל החוברת/ספר",DownloadCurrentPage:"עמוד נוכחי",DownloadAttachedFiles:"קבצים מצורפים",lblLink:"קישור לשיתוף",btnCopy:"העתקה",infCopyToClipboard:"Your browser does not support clipboard.",restorePage:"שחזור",tmpl_Backgoundsoundon:"הפעלת קול",tmpl_Backgoundsoundoff:"הפסקת קול",tmpl_Flipsoundon:"השמעת סאונד דפדוף",tmpl_Flipsoundoff:"הפסקת סאונד דפדוף",Help_PageIndex:"מספר עמוד נוכחי",tmpl_PrintPageRanges:"טווח עמודים",tmpl_PrintPreview:"תצוגה מוקדמת",btnSelection:"בחר טקסט",loginNameLabel:"שם",btnGotoPage:"עבור",btnSettings:"הגדרות",soundSettingTitle:"הגדרת קול",closeFlipSound:"הפסקת סאונד דפדוף",closeBackgroundSound:"הפסקת מוסיקת רקע",frmShareCaption:"שיתוף",frmShareLinkLabel:"לינק שיתוף",frmShareBtnCopy:"העתק",frmShareItemsGroupCaption:"שיתוף חברתי",frmPanelTitle:"Share it",frmShareQRcode:"QRCode",TAnnoActionPropertyStuff_GotoPage:"מעבר לעמוד",btnPageBack:"חזרה",btnPageForward:"קדימה",SelectTextCopy:"העתק טקסט",selectCopyButton:"העתק",TStuffCart_TypeCart:"עגלת קניות",TStuffCart_DetailedQuantity:"כמות",TStuffCart_DetailedPrice:"מחיר",ShappingCart_Close:"סגור",ShappingCart_CheckOut:"עבור לקנייה",ShappingCart_Item:"עגלת קניות",ShappingCart_Total:"סה\"כ",ShappingCart_AddCart:"הוסף לעגלת קניות",ShappingCart_InStock:"במלאי למכירה",TStuffCart_DetailedCost:"הוצאות משלוח",TStuffCart_DetailedTime:"זמן הגעה צפוי",TStuffCart_DetailedDay:"ימים",ShappingCart_NotStock:"לא קיים במלאי",btnCrop:"גזור",btnDragButton:"גרור",btnFlipBook:"ספר לדפדוף",btnSlideMode:"תצוגה רגילה",btnSinglePageMode:"תצוגת עמוד בודד",btnVertical:"ורטיקלי",btnHotizontal:"הוריזונטלי",btnClose:"סגור",btnDoublePage:"עמוד כפול",btnBookStatus:"אופן תצוגה",checkBoxInsert:"הכנס עמוד זה",lblLast:"זהו העמוד האחרון",lblFirst:"זהו העמוד הראשון",lblFullscreen:"עבור לתצוגת עמוד מלא",lblName:"שם-כתובת מייל",lblPassword:"סיסמא",lblLogin:"התחברות",lblCancel:"בטול",lblNoName:"חייבים למלא שם משתמש",lblNoPassword:"חייבים למלא סיסמא",lblNoCorrectLogin:"הכנס שם משתמש וסיסמא נכונים",btnVideo:"גלריית וידאו",btnSlideShow:"SlideShow",pnlSearchInputInvalid:"(אורך מינימלי  הוא 3 סמלים)",btnDragToMove:"גרירה עם העכבר",btnPositionToMove:"Move by mouse position",lblHelp1:"Drag the page corner to view",lblHelp2:"הקלקה כפולה להגדלה/הקטנה",lblCopy:"העתק",lblAddToPage:"הוסף לעמוד",lblPage:"עמוד",lblTitle:"כותרת",lblEdit:"עריכה",lblDelete:"מחיקה",lblRemoveAll:"הסר הכל",tltCursor:"סמן",tltAddHighlight:"הוסף הדגשה",tltAddTexts:"הוסף מלל",tltAddShapes:"הוסף צורות",tltAddNotes:"הוסף הערות",tltAddImageFile:"הוסף תמונה",tltAddSignature:"הוסף חתימה",tltAddLine:"הוסף קו",tltAddArrow:"הוסף חץ",tltAddRect:"הוסף מלבן",tltAddEllipse:"הוסף אליפסה",lblDoubleClickToZoomIn:"הקלקה כפולה להגדלה/הקטנה",frmShareCaption:"שיתוף",frmShareLabel:"Share",frmShareInfo:"You can easily share this publication to social networks.Just cilck the appropriate button below.",frminsertLabel:"Insert to Site",frminsertInfo:"Use the code below to embed this publication to your website.",btnQRCode:"Click to scan QR code",btnRotateLeft:"Rotate Left",btnRotateRight:"Rotate Right",lblSelectMode:"Select view mode please.",frmDownloadPreview:"Preview",frmHowToUse:"How To Use",lblHelpPage1:"Move your finger to flip the book page.",lblHelpPage2:"Zoom in by using gesture or double click on the page.",lblHelpPage3:"Click on the logo to reach the official website of the company.",lblHelpPage4:"Add bookmarks, use search function and auto flip the book.",lblHelpPage5:"Switch horizontal and vertical view on mobile devices.",TTActionQuiz_PlayAgain:"Do you wanna play it again",TTActionQuiz_Ration:"Your ratio is",frmTelephone:"Telephone list",btnDialing:"Dialing",lblSelectMessage:"Please copy the the text content in the text box",btnSelectText:"Select Text",btnNote:"Annotation",btnPhoneNumber:"Telephone",btnWeCharShare:"WeChat Share",btnMagnifierIn:"Magnifying Glass",btnMagnifierOut:"Magnifier Reduction",frmShareSmallProgram:"smallProgram",btnMagnifier:"Magnifier",frmPrintPrintLimitFailed:"Sorry, you can't print the pages.",infNotSupportHtml5:"HTML5 is not supported by your current web browser, please read the book with latest verson web browser. Here we recommend you to read it with Chrome.",btnReport:"Report",btnDoubleSinglePage:"Page switch",frmBookMark:"סימנייה",btnFullscreen:"מסך מלא",btnExitFullscreen:"יציאה ממסך מלא",btnMore:"יותר",frmPrintall:"להדפיס את כל העמודים",frmPrintcurrent:"הדפסת דף נוכחי",frmPrintRange:"טווח הדפסה",frmPrintexample:"לדוגמא: 2,3,5-10",frmPrintbtn:"הדפס",frmaboutcaption:"יצירת קשר",frmaboutcontactinformation:"פרטים ליצירת קשר",frmaboutADDRESS:"כתובת",frmaboutEMAIL:"דוא\"ל",frmaboutWEBSITE:"אתר אינטרנט",frmaboutMOBILE:"טלפון נייד",frmaboutAUTHOR:"מחבר",frmaboutDESCRIPTION:"תיאור",frmSearch:"חיפוש",frmToc:"תוכן עניינים",btnTableOfContent:"כניסה לקטלוג",frmLinkLabel:"קישור",frmQrcodeCaption:"QR סרוק את קוד"}];;function orgt(s){ return binl2hex(core_hx(str2binl(s), s.length * chrsz));};; var pageEditor = {"setting":{}, "pageAnnos":[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]}; bookConfig.isFlipPdf=false; var pages_information =[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}];	
	if(language&&language.length>0&&language[0]&&language[0].language){
		bookConfig.language=language[0].language;
	}
	
try{
	for(var i=0;pageEditor!=undefined&&i<pageEditor.length;i++){
		if(pageEditor[i].length==0){
			continue;
		}
		for(var j=0;j<pageEditor[i].length;j++){
			var anno=pageEditor[i][j];
			if(anno==undefined)continue;
			if(anno.overAlpha==undefined){
				anno.overAlpha=bookConfig.LinkAlpha;
			}
			if(anno.outAlpha==undefined){
				anno.outAlpha=0;
			}
			if(anno.downAlpha==undefined){
				anno.downAlpha=bookConfig.LinkAlpha;
			}
			if(anno.overColor==undefined){
				anno.overColor=bookConfig.LinkDownColor;
			}
			if(anno.downColor==undefined){
				anno.downColor=bookConfig.LinkDownColor;
			}
			if(anno.outColor==undefined){
				anno.outColor=bookConfig.LinkDownColor;
			}
			if(anno.annotype=='com.mobiano.flipbook.pageeditor.TAnnoLink'){
				anno.alpha=bookConfig.LinkAlpha;
			}
		}
	}
}catch(e){
}
try{
	$.browser.device = 2;
}catch(ee){
}
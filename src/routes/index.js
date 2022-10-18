
// const authProtectedRoutes = [
//   { path: '/', component: Dashboard },
//   { path: '/index', component: Dashboard },
//   { path: '/dashboard', component: Dashboard },
//   { path: '/dashboard-saas', component: DashboardSaas },
//   { path: '/dashboard-crypto', component: DashboardCrypto },
//   { path: '/dashboard-blog', component: DashboardBlog },

//   //Crypto
//   { path: '/crypto-wallet', component: CryptoWallet },
//   { path: '/crypto-buy-sell', component: CryptoBuySell },
//   { path: '/crypto-exchange', component: CryptoExchange },
//   { path: '/crypto-lending', component: CryptoLending },
//   { path: '/crypto-orders', component: CryptoOrders },
//   { path: '/crypto-kyc-application', component: CryptoKYCApplication },

//   //chat
//   { path: '/chat', component: Chat },

//   //File Manager
//   { path: '/apps-filemanager', component: FileManager },

//   //calendar
//   { path: '/calendar', component: Calendar },

//   //Ecommerce
//   { path: '/ecommerce-products', component: EcommerceProducts },
//   { path: '/ecommerce-product-detail', component: EcommerceProductDetail },
//   { path: '/ecommerce-orders', component: EcommerceOrders },
//   { path: '/ecommerce-customers', component: EcommerceCustomers },
//   { path: '/ecommerce-cart', component: EcommerceCart },
//   { path: '/ecommerce-checkout', component: EcommerceCheckout },
//   { path: '/ecommerce-shops', component: EcommerceShops },
//   { path: '/ecommerce-add-product', component: EcommerceAddProduct },

//   //Email
//   { path: '/email-inbox', component: EmailInbox },
//   { path: '/email-read', component: EmailRead },
//   { path: '/email-template-basic', component: EmailBasicTemplte },
//   { path: '/email-template-alert', component: EmailAlertTemplte },
//   { path: '/email-template-billing', component: EmailTemplateBilling },

//   //Invoices
//   { path: '/invoices-list', component: InvoicesList },
//   { path: '/invoices-detail/:id', component: InvoiceDetail },
//   { path: '/invoices-detail', component: InvoiceDetail },

//   // Tasks
//   { path: '/tasks-list', component: TasksList },
//   { path: '/tasks-create', component: TasksCreate },

//   //Projects
//   { path: '/projects-grid', component: ProjectsGrid },
//   { path: '/projects-list', component: ProjectsList },
//   { path: '/projects-overview', component: ProjectsOverview },
//   { path: '/projects-create', component: ProjectsCreate },

//   // Contacts
//   { path: '/contacts-grid', component: ContactsGrid },
//   { path: '/contacts-list', component: ContactsList },
//   { path: '/contacts-profile', component: ContactsProfile },

//   //Blog
//   { path: '/blog-list', component: BlogList },
//   { path: '/blog-grid', component: BlogGrid },
//   { path: '/blog-details', component: BlogDetails },

//   //Charts
//   { path: '/charts-apex', component: ChartApex },
//   { path: '/charts-chartjs', component: ChartjsChart },

//   // Icons
//   { path: '/icons-boxicons', component: IconBoxicons },
//   { path: '/icons-dripicons', component: IconDripicons },
//   { path: '/icons-materialdesign', component: IconMaterialdesign },
//   { path: '/icons-fontawesome', component: IconFontawesome },

//   // Tables
//   { path: '/tables-basic', component: BasicTables },
//   { path: '/tables-datatable', component: DataTables },
//   { path: '/tables-editable', component: EditableTables },

//   // Forms
//   { path: '/form-elements', component: FormElements },
//   { path: '/form-layouts', component: FormLayouts },
//   { path: '/form-advanced', component: FormAdvanced },
//   { path: '/form-editors', component: FormEditors },
//   { path: '/form-repeater', component: FormRepeater },
//   { path: '/form-uploads', component: FormUpload },
//   { path: '/form-wizard', component: FormWizard },

//   // Ui
//   { path: '/ui-alerts', component: UiAlert },
//   { path: '/ui-buttons', component: UiButtons },
//   { path: '/ui-cards', component: UiCards },
//   { path: '/ui-carousel', component: UiCarousel },
//   { path: '/ui-colors', component: UiColors },
//   { path: '/ui-dropdowns', component: UiDropdown },
//   { path: '/ui-offcanvas', component: UiOffCanvas },
//   { path: '/ui-general', component: UiGeneral },
//   { path: '/ui-grid', component: UiGrid },
//   { path: '/ui-images', component: UiImages },
//   { path: '/ui-modals', component: UiModal },
//   { path: '/ui-progressbars', component: UiProgressbar },
//   { path: '/ui-sweet-alert', component: UiSweetAlert },
//   { path: '/ui-tabs-accordions', component: UiTabsAccordions },
//   { path: '/ui-typography', component: UiTypography },
//   { path: '/ui-video', component: UiVideo },
//   { path: '/ui-session-timeout', component: UiSessionTimeout },
//   { path: '/ui-rating', component: UiRating },
//   { path: '/ui-rangeslider', component: UiRangeSlider },
//   { path: '/ui-toast', component: UiToast },
//   //Utility
//   { path: '/pages-starter', component: PagesStarter },
//   { path: '/pages-timeline', component: PagesTimeline },
//   { path: '/pages-faqs', component: PagesFaqs },
//   { path: '/pages-pricing', component: PagesPricing },
// ]

// const publicRoutes = [
//   { path: '/login', component: Login },
//   { path: '/register', component: Register },

//   { path: '/pages-maintenance', component: PagesMaintenance },
//   { path: '/pages-comingsoon', component: PagesComingsoon },
//   { path: '/pages-404', component: Pages404 },
//   { path: '/pages-500', component: Pages500 },
//   { path: '/crypto-ico-landing', component: CryptoIcoLanding },

//   // Authentication Inner
//   { path: '/auth-login', component: Login1 },
//   { path: '/auth-login-2', component: Login2 },

//   { path: '/auth-register', component: Register1 },
//   { path: '/auth-register-2', component: Register2 },

//   { path: '/auth-recoverpw', component: Recoverpw },
//   { path: '/auth-recoverpw-2', component: Recoverpw2 },

//   { path: '/auth-forgot-pwd', component: ForgetPwd1 },
//   { path: '/auth-forgot-pwd-2', component: ForgetPwd2 },

//   { path: '/auth-lock-screen', component: LockScreen },
//   { path: '/auth-lock-screen-2', component: LockScreen2 },
//   { path: '/auth-confirm-mail', component: ConfirmMail },
//   { path: '/auth-confirm-mail-2', component: ConfirmMail2 },
//   { path: '/auth-email-verification', component: EmailVerification },
//   { path: '/auth-email-verification-2', component: EmailVerification2 },
//   { path: '/auth-two-step-verification', component: TwostepVerification },
//   { path: '/auth-two-step-verification-2', component: TwostepVerification2 },
// ]

// const MOCK_DATA = {
//   authProtectedRoutes,
//   publicRoutes,
// }

// export default MOCK_DATA
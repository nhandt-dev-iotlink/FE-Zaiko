export const ApiPathConfig = {
  auth: {
    login: '/oauth/token',
    detailUser: '/oauth/user_login',
    logOut: '/oauth/logout',
    changePassword: '/oauth/change-pass',
    forgotPassword: '/oauth/forget-password'
  },
  service: {
    dialogSeach: {
      dialogCommon: '/api/common/dialog-common',
      getProductBySet: '/api/product-by-set',
      getProductChild: '/api/product-child',
      searchProduct: '/api/search-product-child',
      listProductDialog: '/api/list-product-dialog',
      listCustomerDestinationDialog: '/api/get-customer-dest',
      listSupplierDestinationDialog: '/api/get-supplier-dest',
      listProductVariousDialog: '/api/list-product-various-dialog',
      listUserLoginDialog: '/api/get-user-login'
    }
  },
  user: {
    user: '/api/user',
    sendMail: '/api/user/send-mail',
    exportCSV: '/api/user/downloadCSV'
  },
  common: {
    zipcode: '/api/common/zip-code',
    commonSetting: '/api/common/setting',
    commonSettingProductType: '/api/common/setting/inventory-product-type',
    reason: '/api/reason',
    businessDate: '/api/date-daily-process',
    dailyProcess: '/api/daily-process',
    dailyProcessPdf: '/api/daily-process-pdf',
    checkBatch: '/api/check-batch',
    checkDateDaily: '/api/check-date-daily'
  },
  receipt: {
    inventoryInput: '/api/inventory-input',
    inventoryInputPlan: '/api/plan-inventory-input',
    inventoryInputActual: '/api/actual-inventory-input',
    inventoryInputCorrection: '/api/correction-inventory-input',
    closeInventoryInput: '/api/change-isClose-inventory-input',
    checkExistSlipNo: '/api/check-exist-slip-No',
    returnReceiptInput: '/api/return-receipt-input',
    checkExistSlipNoReturnInput: '/api/check-slip-no-return-input',
    exportCSVreturnReceiptInput: '/api/return-receipt-input/downloadCSV',
    orderList: '/api/order-list',
    order: '/api/order',
    orderPdf: '/api/order-pdf',
    orderConfirm: '/api/order-confirm',
    checkValidator: '/api/return-receipt-input/validate',
    orderDetailPdf: '/api/order-detail-pdf',
    // START TANDX NO65 v1
    orderExportAllPdf: '/api/order-export-all-pdf'
    // END TANDX NO65 v1
  },
  inventory: {
    productInventory: '/api/product-inventory',
    productInventoryPdf: '/api/product-inventory-pdf',
    productInventoryPdfByLocation: '/api/product-inventory-by-location-pdf',
    export3010: '/api/product-inventory/downloadCSV3010',
    export3030: '/api/product-inventory/downloadCSV3030'
  },
  master: {
    company: '/api/company',
    exportCSVcompany: '/api/company/downloadCSV',
    exportCSVrepository: '/api/repository/downloadCSV',
    repository: '/api/repository',
    user: '/api/user',
    categoryDetail: '/api/category-detail',
    productCategory: '/api/category',
    checkCategoryCode: '/api/check-category',
    productCategoryCSV: '/api/category/downloadCSV',
    supplier: '/api/supplier',
    getSupplierByCode: '/api/supplier-by-code',
    supplierDeliveryDest: '/api/supplier-dest',
    getSupplierDeliveryDestByCode: '/api/supplier-destination-by-code',
    route: '/api/route',
    course: '/api/course',
    salesUnitPrice: '/api/sales-unit-price',
    productCode: '/api/productCode',
    customerCode: '/api/customerCode',
    exportCSVSales: '/api/sales-unit-price/downloadCSV',
    purchasePriceUnit: '/api/purchase-unit-price',
    exportCSVPurchase: '/api/purchase-unit-price/downloadCSV',
    supplierCode: '/api/supplierCode',
    location: '/api/master-location',
    exportCSVLocation: '/api/location/downloadCSV',
    exportCSVsupplier: '/api/supplier/downloadCSV',
    supplierCheckCode: '/api/supplier-code',
    supplierDestinationCode: '/api/supplier-dest-code',
    checklocation: '/api/check-location',
    product: '/api/product',
    checkProductCode: '/api/product-code',
    productCSV: '/api/product/downloadCSV',
    customer: '/api/customer',
    getCustomerByCode: '/api/customer-by-code',
    customerDeliveryDest: '/api/customer-dest',
    exportCSVCustomer: '/api/customer/downloadCSV',
    customerCheckCode: '/api/customer-code',
    customerDestinationCode: '/api/customer-dest-code',
    customerDestinationByCode: '/api/customer-destination-by-code',
    repositoryCheckDuplicate: '/api/repository/check-duplicate-repository',
    unit: '/api/unit-name',
    detailUnitName: '/api/unit-by-name',
    unitCodeCheck: '/api/unit-name/checkCode',
    unitNameCheck: '/api/unit-name/checkName',
    exportCSVUnit: '/api/unit-name/downloadCSV',
    exportCSVsupplierDest: '/api/supplier-dest/downloadCSV',
    exportCSVcustomerDest: '/api/customer-dest/downloadCSV',
    setProduct: '/api/set-product',
    setProductCSV: '/api/set-product/downloadCSV',
    getProductChildNameByCode: '/api/product-by-code',
    getProductParentNameByCode: '/api/product-parent-by-code',
    getProductByCode: '/api/product-by-product-code',
    getRepositoryByCode: '/api/repository/find-one-repository-by-code',
    getRepositoryById: '/api/repository/find-one-by-id',
    holiday: '/api/holiday',
    checkHoliday: '/api/check-holiday'
  },
  system: {
    user: '/api/user/system',
    userCsv: '/api/system/downloadCSV',
    productCategory: '/api/category'
  },
  delivery: {
    inventoryOutput: '/api/inventory-output',
    inventoryOutput_plan: '/api/inventory-output/plan',
    inventoryOutput_actual: '/api/inventory-output/actual',
    salePrice: '/api/sale-price-by-date',
    salePriceFromTo: '/api/sale-price-by-date-from-to',
    createInventoryOutput: '/api/inventory-output-plan',
    inventoryOutputPlan: '/api/inventory-output-plan',
    inventoryOutputPlanDetail: '/api/inventory-output-plan/detail',
    createInventoryOutputPlanDetail: '/api/inventory-output-plan/create',
    updateInventoryOutputPlanDetail: '/api/inventory-output-plan/update',
    getDestinationCustomer: '/api/customer-destination-by-code',
    checkSlipNo: '/api/check-slip-no',
    inventoryOutputActual: '/api/inventory-output-actual',
    createInventoryOutputActual: '/api/inventory-output-actual',
    closeInventoryOutputPlan: '/api/inventory-output-close',
    returnOutput: '/api/return-output',
    exportCSVreturnOutput: '/api/return-output/downloadCSV',
    createOrUpdateCorrection: '/api/inventory-correction',
    checkExistSlipNoReturnOutput: '/api/check-slip-no-return-output',
    purchasePrice: '/api/purchase-price-by-date',
    ownerChange: '/api/owner-change',
    batch: '/api/batch',
    checkValidatorInventoryProduct: '/api/inventory-output-actual/validate',
    checkValidatorInventoryProductCorrection: '/api/inventory-output-correction/validate',
    getProductVariousByCode: '/api/product-various-by-product-code',
    validateResgisterReturnOutput: '/api/return-output/validate-register',
    validateUpdateReturnOutput: '/api/return-output/validate-update',
    checkExistSlipNoExpense: '/api/check-slip-no-expense',
    shippingFee: '/api/shipping-fee',
    findOneShippingFeeByOutput: '/api/shipping-fee-by-output',
    deliveryIntruction: '/api/delivery-intruction',
    deliveryIntructionPdf: '/api/delivery-intruction-pdf',
    InventoryOutputAllocationDetail: '/api/inventory-allocation-output-detail',
    batchOutputList: '/api/batch-output-list',
    batchOutputAllocatedSubmit: '/api/batch-allocated-submit',
    batchAllocatedList: '/api/batch-allocated-list',
    listCustomerNotMTDialog: '/api/list-customer-not-mt-dialog',
    getCustomerNotMTByCode: '/api/list-customer-not-mt-by-code',
    getProductByCodeAndProductOwnerId: '/api/product-inventory-by-code-productOwnerId',
    getListProductByProductOwnerIdDialog: '/api/product-inventory-by-productOwnerId-dialog',
    inventoryOutputCorrection: '/api/inventory-output-correction',
    deliverySlip: '/api/delivery-slip',
    temporaryAllocation: '/api/temporory-allocation',
    temporaryAllocationPdf: '/api/temporory-allocation/pdf',
    inventoryInputPlanPdf: '/api/plan-inventory-input/pdf',
    inventoryInputActualPdf: '/api/plan-inventory-correction/pdf',
    inventoryInputPlanWorkPdf: '/api/plan-inventory-input/pdf/input',
    inventoryOutputCheckOwnerProductOwnerPlan: '/api/check-product-owner-inventory-output-plan-detail',
    inventoryOutputCheckOwnerProductOwnerActual: '/api/check-product-owner-inventory-output-actual-detail',
    inventoryOutputCheckOwnerProductOwnerCorrection: '/api/check-product-owner-inventory-output-correction-detail',
    checkSlipNoOwnerChange: '/api/ownerchange/check-exist-slip-No',
    checkPurchasePrice: '/api/purchase-price-by-date-supplement',
    listExpenseMapOutput: '/api/list-expense-map-output',
    checkPurchasePriceOrder: '/api/purchase-price-by-date-order',
    deliverySlipPreview: '/api/delivery-slip/preview-pdf',
    exportAllInputPlan: '/api/export-all-inventory-input',
    exportAllOutputPlan: '/api/export-all-inventory-output',
    getListSalePriceShippingFee: '/api/sale-price-shipping-fee',
    exportAllInputActual: '/api/export-all-input-actual',
    exportAllReturnOutputPdf: '/api/export-all-return-output-pdf',
    // START TANDX v1 No58
    exportAllInputPlanWork: '/api/export-all-input-plan-work',
    exportAllActualoutput: '/api/export-all-actual-output',
    // END TANDX v1 No58
    // START TANDX NO66 v1
    exportAllDirectPickListOutput: '/api/export-all-direct-pick-list-output',
    // END TANDX NO66 v1
    // START TANDX NO67 v1
    exportAllDirectPickList: '/api/export-all-direct-pick-list',
    // END TANDX NO67 v1
    // START TANDX NO68 v1
    exportAllSetProductWorking: '/api/export-all-set-product-working-list',
    // END TANDX NO68 v1

    // START TANDX NO70 v1
    exportAllListReturnOutputPdf: '/api/export-all-list-return-output-pdf'
    // END TANDX NO70 v1
  },
  dashboard: {
    supplement: '/api/get-list-supplement',
    dashboardOrder: '/api/dashboard/order',
    missingList: '/api/missing',
    missingListSetProduct: '/api/missing/set',
    missingOrder: '/api/missing/order'
  },
  report: {
    inventoryOutputPdf: '/api/inventory-output-report',
    inventoryActualOutputPdf: '/api/inventory-actual-output-report',
    salesPurchaseUnitOuputReport: '/api/sales-purchase-unit-price-output-report',
    directPickList: '/api/direct-pick-list-report',
    directPickListOutput: '/api/direct-pick-list-output-report',
    deliverySlipReport: '/api/delivery-slip-report',
    deliverySlipExpenseReport: '/api/shipping-fee/pdf',
    deliverySlipReturnInputReport: '/api/return-receipt-input/pdf',
    deliverySlipOwnerChangeReport: '/api/owner-change/pdf',
    deliverySlipOutputActualReport: '/api/output-actual-report',
    setProductWorkingListReport: '/api/set-product-working-list-report',
    returnOutputReport: '/api/return-output-report',
    setProductWorkingList: '/api/report-set-product',
    returnOutputListOutput: '/api/return-output-list-output',
    totalPickingListOutput: '/api/total-picking-list-report',
    inventoryTransferHistoryReport: '/api/inventory-transfer-history-report',
    receiptDetailsOutput: '/api/receipt-detail-output/pdf',
    exportCsv1100: '/api/receipt-detail-output/csv-1100',
    inventoryAdjutmentReport: '/api/inventory-adjutment-history-report',
    receiptAndPaymentProduct: '/api/receipt-payment-by-product',
    inventoryOutputCheckOwnerProductOwnerPlan: '/api/check-product-owner-inventory-output-plan-detail',
    deliveryDetailOutput: '/api/delivery-detail-output/pdf',
    exportCsv2240: '/api/delivery-detail-output/csv-2240',
    receiptAndPaymentProductDate: '/api/receipt-payment-by-date',
    dowloadFileZip: '/api/delivery-slip/dowload-zip',
    //Start HOANGLLN v1 : API export pdf 3140 stocktaking
    stocktakingReport: '/api/stocktaking-report',
    exportAllStocktaking: '/api/export-all-stocktaking',
    //END HOANGLLN v1 : API export pdf 3140 stocktaking

    // START TANDX v1 : 3170
    confirmStocktakingReport: '/api/confirm-stocktaking-report',
    exportAllconfirmStocktaking: '/api/export-all-confirm-stocktaking',
    // END TANDX v1 : 3170
    // START TANDX v1 : 3250
    inventoryDifferenceStocktakingReport: '/api/difference-stocktaking-report',
    exportAllInventoryDifferenceStocktakingReport: '/api/export-all-difference-stocktaking-report'
    // END TANDX v1 : 3250
  },
  edi: {
    outputDownload: '/api/edi/output',
    inputDownload: '/api/edi/input'
  },
  stocktaking: {
    list: '/api/stocktaking',
    run: '/api/stocktaking/run-stock',
    getById: '/api/stocktaking-by-id',
    confirm: '/api/confirm-stotaking',
    cancel: '/api/cancel-stotaking',
    dialogProduct: '/api/stotaking/get-list-product',
    getProductByProductCode: '/api/stotaking/get-product-by-code'
  },
  receiptorder: {
    checkValidator: '/api/receipt-order/validate',
    receiptOrder: '/api/receipt-order',
    downLoadCsv: '/api/download-csv',
    updateReceiptOrder: '/api/receipt-order-update',
    confirmReceiptOrder: '/api/receipt-order-confirm',
    salePrice: '/api/sale-price-by-date-order'
  },
  inventorySetProduct: {
    list: '/api/inventory-set-product',
    getProductByCode: '/api/set-product/get-by-code',
    setProductDialog: '/api/inventory-set-product-dialog',
    findByOneProductInventoryChild: '/api/set-product/find-by-one-product-inventory-child',
    findByOneProductInventoryParent: '/api/set-product/find-by-one-product-inventory-parent',
    checkSlipNo: '/api/inventory-set-product/checkSlipNo'
  },
  historyProductInventoryChange: {
    pdf: '/api/history-product-inventory-change/pdf'
  }

};

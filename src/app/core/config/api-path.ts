import { environment } from '@env/environment';
import { ApiPathConfig } from '.';

export class ApiPath {
  //AUTH MODULE
  public static LOGIN = environment.API_AUTH.concat(ApiPathConfig.auth.login);
  public static USER_LOGIN = environment.API_AUTH.concat(ApiPathConfig.auth.detailUser);
  public static LOGOUT = environment.API_AUTH.concat(ApiPathConfig.auth.logOut);
  public static CHANGE_PASSWORD = environment.API_AUTH.concat(ApiPathConfig.auth.changePassword);
  public static FORGOT_PASSWORD = environment.API_AUTH.concat(ApiPathConfig.auth.forgotPassword);

  public static CREATE_AND_UPDATE_USER = environment.API_SERVICE.concat(ApiPathConfig.user.user);
  public static GET_CUSTOMER_INFO = environment.API_SERVICE.concat(ApiPathConfig.user.user);
  public static DELETE_USER = environment.API_SERVICE.concat(ApiPathConfig.user.user);
  public static GET_DATA_DIALOG_COMMON = environment.API_SERVICE.concat(ApiPathConfig.service.dialogSeach.dialogCommon);

  // MASTER
  public static COMPANY = environment.API_SERVICE.concat(ApiPathConfig.master.company);
  public static PRODUCT_COMPANY = environment.API_SERVICE.concat(ApiPathConfig.master.productCategory);
  public static REPOSITORY = environment.API_SERVICE.concat(ApiPathConfig.master.repository);
  public static REPOSITORY_CHECK_DUPLICATE = environment.API_SERVICE.concat(ApiPathConfig.master.repositoryCheckDuplicate);
  public static REPOSITORY_FIND_ONE_BY_CODE = environment.API_SERVICE.concat(ApiPathConfig.master.getRepositoryByCode);
  public static REPOSITORY_FIND_ONE_BY_ID = environment.API_SERVICE.concat(ApiPathConfig.master.getRepositoryById);
  public static SUPPLIER = environment.API_SERVICE.concat(ApiPathConfig.master.supplier);
  public static GET_SUPPLIER_BY_CODE = environment.API_SERVICE.concat(ApiPathConfig.master.getSupplierByCode);
  public static SALES_UNIT_PRICE = environment.API_SERVICE.concat(ApiPathConfig.master.salesUnitPrice);
  public static SALES_PRICE_UNIT_EXPORT_CSV = environment.API_SERVICE.concat(ApiPathConfig.master.exportCSVSales);
  public static CUSTOMER = environment.API_SERVICE.concat(ApiPathConfig.master.customer);
  public static GET_CUSTOMER_BY_CODE = environment.API_SERVICE.concat(ApiPathConfig.master.getCustomerByCode);
  public static UNIT = environment.API_SERVICE.concat(ApiPathConfig.master.unit);
  public static DETAIL_UNIT_NAME = environment.API_SERVICE.concat(ApiPathConfig.master.detailUnitName);
  public static SET_PRODUCT = environment.API_SERVICE.concat(ApiPathConfig.master.setProduct);
  public static UNIT_CODE_CHECK = environment.API_SERVICE.concat(ApiPathConfig.master.unitCodeCheck);
  public static UNIT_NAME_CHECK = environment.API_SERVICE.concat(ApiPathConfig.master.unitNameCheck);
  public static UNIT_EXPORT_CSV = environment.API_SERVICE.concat(ApiPathConfig.master.exportCSVUnit);
  // PRODUCT ID
  public static PRODUCT_CODE = environment.API_SERVICE.concat(ApiPathConfig.master.productCode);

  public static CUSTOMER_CODE = environment.API_SERVICE.concat(ApiPathConfig.master.customerCode);
  public static COMPANY_EXPORT_CSV = environment.API_SERVICE.concat(ApiPathConfig.master.exportCSVcompany);

  // SUPPLIER ID
  public static SUPPLIER_DELIVERY_DEST = environment.API_SERVICE.concat(ApiPathConfig.master.supplierDeliveryDest);
  public static GET_SUPPLIER_DELIVERY_DEST_BY_CODE = environment.API_SERVICE.concat(ApiPathConfig.master.getSupplierDeliveryDestByCode);
  public static ROUTE = environment.API_SERVICE.concat(ApiPathConfig.master.route);
  public static COURSE = environment.API_SERVICE.concat(ApiPathConfig.master.course);
  public static SUPPLIER_EXPORT_CSV = environment.API_SERVICE.concat(ApiPathConfig.master.exportCSVsupplier);
  public static SUPPLIER_DEST_EXPORT_CSV = environment.API_SERVICE.concat(ApiPathConfig.master.exportCSVsupplierDest);
  public static SUPPLIER_CHECK_CODE = environment.API_SERVICE.concat(ApiPathConfig.master.supplierCheckCode);
  public static SUPPLIER_DESTINATION_CODE = environment.API_SERVICE.concat(ApiPathConfig.master.supplierDestinationCode);

  public static REPOSITORY_EXPORT_CSV = environment.API_SERVICE.concat(ApiPathConfig.master.exportCSVrepository);
  // PURCHASE PRICE UNIT
  public static PURCHASE_PRICE_UNIT = environment.API_SERVICE.concat(ApiPathConfig.master.purchasePriceUnit);
  public static PURCHASE_PRICE_UNIT_EXPORT_CSV = environment.API_SERVICE.concat(ApiPathConfig.master.exportCSVPurchase);

  // COMMON API
  public static ZIP_CODE = environment.API_SERVICE.concat(ApiPathConfig.common.zipcode);
  public static COMMON_SETTNG = environment.API_SERVICE.concat(ApiPathConfig.common.commonSetting);
  public static COMMON_SETTNG_PRODUCT_TYPE = environment.API_SERVICE.concat(ApiPathConfig.common.commonSettingProductType);
  public static BUSINESS_DATE = environment.API_SERVICE.concat(ApiPathConfig.common.businessDate);
  public static DAILY_PROCESS = environment.API_SERVICE.concat(ApiPathConfig.common.dailyProcess);
  public static DAILY_PROCESS_PDF = environment.API_SERVICE.concat(ApiPathConfig.common.dailyProcessPdf);
  public static CHECK_BATCH = environment.API_SERVICE.concat(ApiPathConfig.common.checkBatch);
  public static CHECK_DATE_DAILY = environment.API_SERVICE.concat(ApiPathConfig.common.checkDateDaily);

  // MASTER USER
  public static USER_MASTER = environment.API_SERVICE.concat(ApiPathConfig.master.user);
  public static USER_SEND_MAIL = environment.API_SERVICE.concat(ApiPathConfig.user.sendMail);
  public static USER_EXPORT_CSV = environment.API_SERVICE.concat(ApiPathConfig.user.exportCSV);

  // MASTER LOCATION
  public static LOCATION = environment.API_SERVICE.concat(ApiPathConfig.master.location);
  public static CHECKLOCATION = environment.API_SERVICE.concat(ApiPathConfig.master.checklocation);
  public static LOCATION_EXPORT_CSV = environment.API_SERVICE.concat(ApiPathConfig.master.exportCSVLocation);

  // SYSTEM USER
  public static USER_SYSTEM = environment.API_SERVICE.concat(ApiPathConfig.system.user);
  public static USER_SYSTEM_EXPORT_CSV = environment.API_SERVICE.concat(ApiPathConfig.system.userCsv);

  // SUPPLIER ID
  public static SUPPLIER_CODE = environment.API_SERVICE.concat(ApiPathConfig.master.supplierCode);

  // CATEGORY
  public static PRODUCT_CATEGORY = environment.API_SERVICE.concat(ApiPathConfig.master.productCategory);
  public static CHECK_CATEGORY_CODE = environment.API_SERVICE.concat(ApiPathConfig.master.checkCategoryCode);
  public static PRODUCT_CATEGORY_DETAIL = environment.API_SERVICE.concat(ApiPathConfig.master.categoryDetail);
  public static PRODUCT_CATEGORY_CSV = environment.API_SERVICE.concat(ApiPathConfig.master.productCategoryCSV);

  // PRODUCT
  public static PRODUCT_MASTER = environment.API_SERVICE.concat(ApiPathConfig.master.product);
  public static PRODUCT_MASTER_CHECKCODE = environment.API_SERVICE.concat(ApiPathConfig.master.checkProductCode);
  public static PRODUCT_MASTER_CSV = environment.API_SERVICE.concat(ApiPathConfig.master.productCSV);

  // CUSTOMER ID
  public static CUSTOMER_DELIVERY_DEST = environment.API_SERVICE.concat(ApiPathConfig.master.customerDeliveryDest);
  public static CUSTOMER_EXPORT_CSV = environment.API_SERVICE.concat(ApiPathConfig.master.exportCSVCustomer);
  public static CUSTOMER_CHECK_CODE = environment.API_SERVICE.concat(ApiPathConfig.master.customerCheckCode);
  public static CUSTOMER_DESTINATION_CODE = environment.API_SERVICE.concat(ApiPathConfig.master.customerDestinationCode);
  public static CUSTOMER_DESTINATION_BY_CODE = environment.API_SERVICE.concat(ApiPathConfig.master.customerDestinationByCode);
  public static CUSTOMER_DEST_EXPORT_CSV = environment.API_SERVICE.concat(ApiPathConfig.master.exportCSVcustomerDest);


  //API DIALOG API
  public static GET_PRODUCT_BY_SET = environment.API_SERVICE.concat(ApiPathConfig.service.dialogSeach.getProductBySet);
  public static GET_PRODUCT_CHILD = environment.API_SERVICE.concat(ApiPathConfig.service.dialogSeach.getProductChild);
  public static SEARCH_PRODUCT = environment.API_SERVICE.concat(ApiPathConfig.service.dialogSeach.searchProduct);
  public static LIST_PRODUCT_DIALOG = environment.API_SERVICE.concat(ApiPathConfig.service.dialogSeach.listProductDialog);
  public static LIST_PRODUCT_VARIOUS_DIALOG = environment.API_SERVICE.concat(ApiPathConfig.service.dialogSeach.listProductVariousDialog);
  public static LIST_DESTINATION_CUSTOMER_DIALOG = environment.API_SERVICE.concat(ApiPathConfig.service.dialogSeach.listCustomerDestinationDialog);
  public static LIST_DESTINATION_SUPPLIER_DIALOG = environment.API_SERVICE.concat(ApiPathConfig.service.dialogSeach.listSupplierDestinationDialog);
  public static LIST_USER_LOGIN_DIALOG = environment.API_SERVICE.concat(ApiPathConfig.service.dialogSeach.listUserLoginDialog);

  //SET PRODUCT
  public static SET_PRODUCT_EXPORT_CSV = environment.API_SERVICE.concat(ApiPathConfig.master.setProductCSV);
  public static GET_CHILD_NAME_BY_CODE = environment.API_SERVICE.concat(ApiPathConfig.master.getProductChildNameByCode);
  public static GET_PARENT_NAME_BY_CODE = environment.API_SERVICE.concat(ApiPathConfig.master.getProductParentNameByCode);
  public static GET_PRODUCT_BY_CODE = environment.API_SERVICE.concat(ApiPathConfig.master.getProductByCode);

  //DELIVERY INVENTORY OUTPUT
  public static INVENTORY_OUTPUT = environment.API_SERVICE.concat(ApiPathConfig.delivery.inventoryOutput);
  public static INVENTORY_OUTPUTPLAN = environment.API_SERVICE.concat(ApiPathConfig.delivery.inventoryOutput_plan);
  public static INVENTORY_OUTPUTACTUAL = environment.API_SERVICE.concat(ApiPathConfig.delivery.inventoryOutput_actual);
  public static SALE_PRICE = environment.API_SERVICE.concat(ApiPathConfig.delivery.salePrice);
  public static SALE_PRICE_FROM_TO = environment.API_SERVICE.concat(ApiPathConfig.delivery.salePriceFromTo);
  public static CREATE_INVENTORY_OUTPUT = environment.API_SERVICE.concat(ApiPathConfig.delivery.createInventoryOutput);
  public static INVENTORY_OUTPUT_PLAN = environment.API_SERVICE.concat(ApiPathConfig.delivery.inventoryOutputPlan);
  public static INVENTORY_OUTPUT_PLAN_DETAIL = environment.API_SERVICE.concat(ApiPathConfig.delivery.inventoryOutputPlanDetail);
  public static CREATE_INVENTORY_OUTPUT_PLAN_DETAIL = environment.API_SERVICE.concat(ApiPathConfig.delivery.createInventoryOutputPlanDetail);
  public static UPDATE_INVENTORY_OUTPUT_PLAN_DETAIL = environment.API_SERVICE.concat(ApiPathConfig.delivery.updateInventoryOutputPlanDetail);
  public static GET_DESTINATION_CUSTOMER = environment.API_SERVICE.concat(ApiPathConfig.delivery.getDestinationCustomer);
  public static CHECK_SLIP_NO = environment.API_SERVICE.concat(ApiPathConfig.delivery.checkSlipNo);
  public static CLOSE_INVENTORY_OUTPUT = environment.API_SERVICE.concat(ApiPathConfig.delivery.closeInventoryOutputPlan);
  public static INVENTORY_OUTPUT_CORRECTION = environment.API_SERVICE.concat(ApiPathConfig.delivery.inventoryOutputCorrection);

  public static INVENTORY_OUTPUT_ACTUAL = environment.API_SERVICE.concat(ApiPathConfig.delivery.inventoryOutputActual);
  public static CREATE_INVENTORY_OUTPUT_ACTUAL = environment.API_SERVICE.concat(ApiPathConfig.delivery.createInventoryOutputActual);
  public static CREATE_INVENTORY_OUTPUT_CORRECTION = environment.API_SERVICE.concat(ApiPathConfig.delivery.createOrUpdateCorrection);
  public static CHECK_VALIDATE_INVENTORY_PRODUCT = environment.API_SERVICE.concat(ApiPathConfig.delivery.checkValidatorInventoryProduct);
  public static CHECK_VALIDATE_INVENTORY_PRODUCT_CORRECTION = environment.API_SERVICE.concat(ApiPathConfig.delivery.checkValidatorInventoryProductCorrection);
  public static CHECK_PRODUCT_OWNER_PLAN = environment.API_SERVICE.concat(ApiPathConfig.delivery.inventoryOutputCheckOwnerProductOwnerPlan);
  public static CHECK_PRODUCT_OWNER_ACTUAL = environment.API_SERVICE.concat(ApiPathConfig.delivery.inventoryOutputCheckOwnerProductOwnerActual);
  public static CHECK_PRODUCT_OWNER_CORRECTION = environment.API_SERVICE.concat(ApiPathConfig.delivery.inventoryOutputCheckOwnerProductOwnerCorrection);
  public static LIST_EXPENSE_MAP_OUTPUT = environment.API_SERVICE.concat(ApiPathConfig.delivery.listExpenseMapOutput);




  //INVENTORY INPUT
  public static INVENTORY_INPUT = environment.API_SERVICE.concat(ApiPathConfig.receipt.inventoryInput);
  public static INVENTORY_INPUT_PLAN = environment.API_SERVICE.concat(ApiPathConfig.receipt.inventoryInputPlan);
  public static INVENTORY_INPUT_ACTUAL = environment.API_SERVICE.concat(ApiPathConfig.receipt.inventoryInputActual);
  public static INVENTORY_INPUT_CORRECTION = environment.API_SERVICE.concat(ApiPathConfig.receipt.inventoryInputCorrection);
  public static CLOSE_INVENTORY_INPUT = environment.API_SERVICE.concat(ApiPathConfig.receipt.closeInventoryInput);
  public static CHECK_EXIST_SLIP_NO = environment.API_SERVICE.concat(ApiPathConfig.receipt.checkExistSlipNo);
  //RETURN RECEIPT INPUT
  public static RETURN_RECEIPT_INPUT_EXPORT_CSV = environment.API_SERVICE.concat(ApiPathConfig.receipt.exportCSVreturnReceiptInput);
  public static RETURN_RECEIPT_INPUT = environment.API_SERVICE.concat(ApiPathConfig.receipt.returnReceiptInput);
  public static CHECK_SLIP_NO_RETURN_RECEIPT_INPUT = environment.API_SERVICE.concat(ApiPathConfig.receipt.checkExistSlipNoReturnInput);
  public static CHECK_VALIDATE = environment.API_SERVICE.concat(ApiPathConfig.receipt.checkValidator);

  //REASON
  public static REASON = environment.API_SERVICE.concat(ApiPathConfig.common.reason);

  //RETURN OUTPUT
  public static RETURN_OUTPUT = environment.API_SERVICE.concat(ApiPathConfig.delivery.returnOutput);
  public static RETURN_OUTPUT_EXPORT_CSV = environment.API_SERVICE.concat(ApiPathConfig.delivery.exportCSVreturnOutput);
  public static CHECK_SLIP_NO_RETURN_OUTPUT = environment.API_SERVICE.concat(ApiPathConfig.delivery.checkExistSlipNoReturnOutput);
  public static PURCHASE_PRICE = environment.API_SERVICE.concat(ApiPathConfig.delivery.purchasePrice);
  public static VALIDATE_REGISTER_RETURN_OUTPUT = environment.API_SERVICE.concat(ApiPathConfig.delivery.validateResgisterReturnOutput);
  public static VALIDATE_UPDATE_RETURN_OUTPUT = environment.API_SERVICE.concat(ApiPathConfig.delivery.validateUpdateReturnOutput);
  public static CHECK_PURCHASE_PRICE = environment.API_SERVICE.concat(ApiPathConfig.delivery.checkPurchasePrice);
  public static CHECK_PURCHASE_PRICE_ORDER = environment.API_SERVICE.concat(ApiPathConfig.delivery.checkPurchasePriceOrder);




  // PRODUCT INVENTORY
  public static PRODUCT_INVENTORY = environment.API_SERVICE.concat(ApiPathConfig.inventory.productInventory);
  public static PRODUCT_INVENTORY_PDF = environment.API_SERVICE.concat(ApiPathConfig.inventory.productInventoryPdf);
  public static PRODUCT_INVENTORY_PDF_BY_LOCATION = environment.API_SERVICE.concat(ApiPathConfig.inventory.productInventoryPdfByLocation);
  public static PRODUCT_INVENTORY_CSV_3010 = environment.API_SERVICE.concat(ApiPathConfig.inventory.export3010);
  public static PRODUCT_INVENTORY_CSV_3030 = environment.API_SERVICE.concat(ApiPathConfig.inventory.export3030);


  // OWNER CHANGE
  public static OWNER_CHANGE = environment.API_SERVICE.concat(ApiPathConfig.delivery.ownerChange);
  public static CUSTOMER_NOT_MT_BY_CODE = environment.API_SERVICE.concat(ApiPathConfig.delivery.getCustomerNotMTByCode);
  public static CUSTOMER_NOT_MT_DIALOG = environment.API_SERVICE.concat(ApiPathConfig.delivery.listCustomerNotMTDialog);
  public static PRODUCT_BY_CODE_PRODUCT_OWNER_ID = environment.API_SERVICE.concat(ApiPathConfig.delivery.getProductByCodeAndProductOwnerId);
  public static PRODUCT_BY_PRODUCT_OWNER_ID_DIALOG = environment.API_SERVICE.concat(ApiPathConfig.delivery.getListProductByProductOwnerIdDialog);
  public static CHECK_SLIP_NO_OWNER_CHANGE = environment.API_SERVICE.concat(ApiPathConfig.delivery.checkSlipNoOwnerChange);

  //BATCH
  public static BATCH = environment.API_SERVICE.concat(ApiPathConfig.delivery.batch);

  //SHIPPING FEE
  public static SHIPPING_FEE = environment.API_SERVICE.concat(ApiPathConfig.delivery.shippingFee);
  public static GET_PRODUCT_VARIOUS_BY_CODE = environment.API_SERVICE.concat(ApiPathConfig.delivery.getProductVariousByCode);
  public static CHECK_SLIP_NO_EXPENSE = environment.API_SERVICE.concat(ApiPathConfig.delivery.checkExistSlipNoExpense);
  public static FIND_ONE_SHIPPING_FEE_BY_OUTPUT = environment.API_SERVICE.concat(ApiPathConfig.delivery.findOneShippingFeeByOutput);
  public static SALE_PRICE_SHIPPING_FEE = environment.API_SERVICE.concat(ApiPathConfig.delivery.getListSalePriceShippingFee);

  //DELIVERY INSTRUCTION
  public static DELIVERY_INSTRUCTION = environment.API_SERVICE.concat(ApiPathConfig.delivery.deliveryIntruction);
  // START TANDX NO68 v1
  public static EXPORT_ALL_SET_PRODUCT_WORKING = environment.API_SERVICE.concat(ApiPathConfig.delivery.exportAllSetProductWorking);
  // END TANDX NO68 v1

  //DELIVERY INSTRUCTION PDF
  public static DELIVERY_INSTRUCTION_PDF = environment.API_SERVICE.concat(ApiPathConfig.delivery.deliveryIntructionPdf);
  // START TANDX NO66 v1
  public static EXPORT_ALL_DELIVERY_INSTRUCTION_PDF = environment.API_SERVICE.concat(ApiPathConfig.delivery.exportAllDirectPickListOutput);
  // END TANDX NO66 v1

  // START TANDX NO67 v1
  public static EXPORT_ALL_DIRECT_PICK_LIST_PDF = environment.API_SERVICE.concat(ApiPathConfig.delivery.exportAllDirectPickList);
  // START TANDX NO67 v1
  //DELIVERY SLIP
  public static DELIVERY_SLIP = environment.API_SERVICE.concat(ApiPathConfig.delivery.deliverySlip);
  public static DELIVERY_SLIP_PREVIEW = environment.API_SERVICE.concat(ApiPathConfig.delivery.deliverySlipPreview);

  //TEMPORARY ALLOCATION
  public static TEMPORARY_ALLOCATION = environment.API_SERVICE.concat(ApiPathConfig.delivery.temporaryAllocation);
  public static TEMPORARY_ALLOCATION_PDF = environment.API_SERVICE.concat(ApiPathConfig.delivery.temporaryAllocationPdf);

  //DELIVERY CHANGE ALLOCATION
  // public static DELIVERY_CHANGE_LOCATION = environment.API_SERVICE.concat(ApiPathConfig.delivery.deliveryChangeAllocation);
  //ORDER
  public static ORDER_LIST = environment.API_SERVICE.concat(ApiPathConfig.receipt.orderList);
  public static ORDER = environment.API_SERVICE.concat(ApiPathConfig.receipt.order);
  public static ORDER_PDF = environment.API_SERVICE.concat(ApiPathConfig.receipt.orderPdf);
  public static ORDER_CONFIRM = environment.API_SERVICE.concat(ApiPathConfig.receipt.orderConfirm);
  public static ORDER_DETAIL_PDF = environment.API_SERVICE.concat(ApiPathConfig.receipt.orderDetailPdf);

  // START TANDX NO65 v1
  public static ORDER_EXPORT_ALL_PDF = environment.API_SERVICE.concat(ApiPathConfig.receipt.orderExportAllPdf);
  // END TANDX NO65 v1

  public static INVENTORY_OUTPUT_ALLOCATION_DETAIL = environment.API_SERVICE.concat(ApiPathConfig.delivery.InventoryOutputAllocationDetail);
  public static LIST_BATCH_OUTPUT = environment.API_SERVICE.concat(ApiPathConfig.delivery.batchOutputList);
  public static BATCH_OUTPUT_ALLOCATED_SUBMIT = environment.API_SERVICE.concat(ApiPathConfig.delivery.batchOutputAllocatedSubmit);

  // BatchAllocatedOutputDetail
  public static LIST_BATCH_ALLOCATED_OUTPUT_DETAIL = environment.API_SERVICE.concat(ApiPathConfig.delivery.batchAllocatedList);

  // DASHBOARD
  public static SUPPLEMENT = environment.API_SERVICE.concat(ApiPathConfig.dashboard.supplement);
  public static DASHBOARD_ORDER = environment.API_SERVICE.concat(ApiPathConfig.dashboard.dashboardOrder);

  // INVENTORY_OUTPUT_PDF
  public static INVENTORY_OUTPUT_PDF = environment.API_SERVICE.concat(ApiPathConfig.report.inventoryOutputPdf);
  public static INVENTORY_ACTUAL_OUTPUT_PDF = environment.API_SERVICE.concat(ApiPathConfig.report.inventoryActualOutputPdf);
  public static EXPORT_ALL_OUTPUT_PLAN_PDF = environment.API_SERVICE.concat(ApiPathConfig.delivery.exportAllOutputPlan);

  // INVENTORY_INPUT_PDF
  public static INVENTORY_INPUT_ACTUAL_PDF = environment.API_SERVICE.concat(ApiPathConfig.delivery.inventoryInputActualPdf);
  public static INVENTORY_INPUT_PLAN_PDF = environment.API_SERVICE.concat(ApiPathConfig.delivery.inventoryInputPlanPdf);
  public static INVENTORY_INPUT_PLAN_WORK_PDF = environment.API_SERVICE.concat(ApiPathConfig.delivery.inventoryInputPlanWorkPdf);
  public static EXPORT_ALL_INPUT_PLAN_PDF = environment.API_SERVICE.concat(ApiPathConfig.delivery.exportAllInputPlan);
  public static EXPORT_ALL_INPUT_ACTUAL_PDF = environment.API_SERVICE.concat(ApiPathConfig.delivery.exportAllInputActual);
  public static EXPORT_ALL_RETURN_OUTPUT_PDF = environment.API_SERVICE.concat(ApiPathConfig.delivery.exportAllReturnOutputPdf);
  // START TANDX v1 No58
  public static EXPORT_ALL_INPUT_PLAN_WORK_PDF = environment.API_SERVICE.concat(ApiPathConfig.delivery.exportAllInputPlanWork);
  public static EXPORT_ALL_ACTUAL_OUTPUT_PDF = environment.API_SERVICE.concat(ApiPathConfig.delivery.exportAllActualoutput);
  // END TANDX v1 No58

  // SALES_PURCHASE_UNIT_PRICE_OUTPUT_REPORT
  public static SALES_PURCHASE_UNIT_PRICE_OUTPUT_REPORT = environment.API_SERVICE.concat(ApiPathConfig.report.salesPurchaseUnitOuputReport);

  // DIRECT_PICK_LIST_REPORT
  public static DIRECT_PICK_LIST_REPORT = environment.API_SERVICE.concat(ApiPathConfig.report.directPickList);
  public static DIRECT_PICK_LIST_OUTPUT_REPORT = environment.API_SERVICE.concat(ApiPathConfig.report.directPickListOutput);
  // DELIVERY_SLIP_REPORT
  public static DELIVERY_SLIP_REPORT = environment.API_SERVICE.concat(ApiPathConfig.report.deliverySlipReport);
  public static DELIVERY_SLIP_EXPENSE_REPORT = environment.API_SERVICE.concat(ApiPathConfig.report.deliverySlipExpenseReport);
  public static DELIVERY_SLIP_RETURN_INPUT_REPORT = environment.API_SERVICE.concat(ApiPathConfig.report.deliverySlipReturnInputReport);
  public static DELIVERY_SLIP_OWNER_CHANGE_REPORT = environment.API_SERVICE.concat(ApiPathConfig.report.deliverySlipOwnerChangeReport);
  public static DELIVERY_SLIP_OUTPUT_ACTUAL_REPORT = environment.API_SERVICE.concat(ApiPathConfig.report.deliverySlipOutputActualReport);
  public static SET_PRODUCT_WORKING_LIST_REPORT = environment.API_SERVICE.concat(ApiPathConfig.report.setProductWorkingListReport);
  public static DELIVERY_SLIP_DOWLOAD_FILE_ZIP = environment.API_SERVICE.concat(ApiPathConfig.report.dowloadFileZip);

  //EDI
  public static OUTPUT_DOWNLOAD = environment.API_SERVICE.concat(ApiPathConfig.edi.outputDownload);
  public static INPUT_DOWNLOAD = environment.API_SERVICE.concat(ApiPathConfig.edi.inputDownload);

  // HOLIDAY
  public static HOLIDAY = environment.API_SERVICE.concat(ApiPathConfig.master.holiday);
  public static CHECKHOLIDAY = environment.API_SERVICE.concat(ApiPathConfig.master.checkHoliday);

  //STOCKTAKING
  public static STOCKTAKING = environment.API_SERVICE.concat(ApiPathConfig.stocktaking.list);
  public static STOCKTAKING_RUN = environment.API_SERVICE.concat(ApiPathConfig.stocktaking.run);
  public static STOCKTAKING_GET_BY_ID = environment.API_SERVICE.concat(ApiPathConfig.stocktaking.getById);
  public static STOCKTAKING_CONFIRM = environment.API_SERVICE.concat(ApiPathConfig.stocktaking.confirm);
  public static STOCKTAKING_CANCEL = environment.API_SERVICE.concat(ApiPathConfig.stocktaking.cancel);
  public static STOCKTAKING_DIALOG_PRODUCT_CODE = environment.API_SERVICE.concat(ApiPathConfig.stocktaking.dialogProduct);
  public static STOCKTAKING_PRODUCT_CODE_BY_CODE = environment.API_SERVICE.concat(ApiPathConfig.stocktaking.getProductByProductCode);

  // START TANDX v1 : 3250
  public static DIFFERENCE_INVENTORY_STOCKTAKING_REPORT = environment.API_SERVICE.concat(ApiPathConfig.report.inventoryDifferenceStocktakingReport);
  public static EXPORT_ALL_DIFFERENCE_INVENTORY_STOCKTAKING_REPORT = environment.API_SERVICE.concat(ApiPathConfig.report.exportAllInventoryDifferenceStocktakingReport);
  // END TANDX v1 : 3250


  // START TANDX v1 : 3170
  public static CONFIRM_STOCKTAKING_REPORT = environment.API_SERVICE.concat(ApiPathConfig.report.confirmStocktakingReport);
  public static EXPORT_ALL_CONFIRM_STOCKTAKING_REPORT = environment.API_SERVICE.concat(ApiPathConfig.report.exportAllconfirmStocktaking);
  // END TANDX v1 : 3170


  //Start HOANGLLN v1 : API export pdf 3140 stocktaking
  public static STOCKTAKING_REPORT = environment.API_SERVICE.concat(ApiPathConfig.report.stocktakingReport);
  public static EXPORT_ALL_STOCKTAKING_PDF = environment.API_SERVICE.concat(ApiPathConfig.report.exportAllStocktaking);
  //END HOANGLLN v1 : API export pdf 3140 stocktaking

  // RETURN OUTPUT REPORT
  public static RETURN_OUTPUT_REPORT = environment.API_SERVICE.concat(ApiPathConfig.report.returnOutputReport);

  // START TANDX NO70 v1
  public static EXPORT_ALL_LIST_RETURN_OUTPUT_PDF = environment.API_SERVICE.concat(ApiPathConfig.delivery.exportAllListReturnOutputPdf);
  // END TANDX NO70 v1

  // INVENTORY SETPRODUCT
  public static INVENTORY_SET_PRODUCT = environment.API_SERVICE.concat(ApiPathConfig.inventorySetProduct.list);
  public static INVENTORY_SET_PRODUCT_LIST_DIALOG = environment.API_SERVICE.concat(ApiPathConfig.inventorySetProduct.setProductDialog);
  public static INVENTORY_SET_PRODUCT_GET_PRODUCT_BY_CODE = environment.API_SERVICE.concat(ApiPathConfig.inventorySetProduct.getProductByCode);
  public static INVENTORY_SET_PRODUCT_FIND_BY_ONE_PRODUCT_INVENTORY_PARENT = environment.API_SERVICE.concat(ApiPathConfig.inventorySetProduct.findByOneProductInventoryParent);
  public static INVENTORY_SET_PRODUCT_FIND_BY_ONE_PRODUCT_INVENTORY_CHILD = environment.API_SERVICE.concat(ApiPathConfig.inventorySetProduct.findByOneProductInventoryChild);
  public static INVENTORY_SET_PRODUCT_CHECK_SLIPNO = environment.API_SERVICE.concat(ApiPathConfig.inventorySetProduct.checkSlipNo);


  //public static PRODUCT_INVENTORY_PDF = environment.API_SERVICE.concat(ApiPathConfig.inventory.productInventoryPdf);
  //public static PRODUCT_INVENTORY_PDF_BY_LOCATION = environment.API_SERVICE.concat(ApiPathConfig.inventory.productInventoryPdfByLocation);
  // RECEIPT ORDER IMPORT
  public static CHECK_VALIDATE_IMPORT = environment.API_SERVICE.concat(ApiPathConfig.receiptorder.checkValidator);
  public static RECEIPT_ORDER_LIST = environment.API_SERVICE.concat(ApiPathConfig.receiptorder.receiptOrder);
  public static RECEIPT_ORDER = environment.API_SERVICE.concat(ApiPathConfig.receiptorder.receiptOrder);
  public static DOWNLOAD_CSV = environment.API_SERVICE.concat(ApiPathConfig.receiptorder.downLoadCsv);
  public static RECEIPT_ORDER_UPDATE = environment.API_SERVICE.concat(ApiPathConfig.receiptorder.updateReceiptOrder);
  public static RECEIPT_ORDER_CONFIRM = environment.API_SERVICE.concat(ApiPathConfig.receiptorder.confirmReceiptOrder);
  public static SALE_PRICE_ORDER = environment.API_SERVICE.concat(ApiPathConfig.receiptorder.salePrice);
  // REPORT SET PRODUCT
  public static REPORT_SET_PRODUCT = environment.API_SERVICE.concat(ApiPathConfig.report.setProductWorkingList);

  // RETURN OUTPUT LIST OUTPUT REPORT
  public static RETURN_OUTPUT_LIST_OUTPUT = environment.API_SERVICE.concat(ApiPathConfig.report.returnOutputListOutput);

  // TOTAL_PICKING_LIST_OUTPUT_REPORT
  public static TOTAL_PICKING_LIST_OUTPUT_REPORT = environment.API_SERVICE.concat(ApiPathConfig.report.totalPickingListOutput);
  // MISSING LIST
  public static MISSING_LIST = environment.API_SERVICE.concat(ApiPathConfig.dashboard.missingList);
  public static MISSING_LIST_SET_PRODUCT = environment.API_SERVICE.concat(ApiPathConfig.dashboard.missingListSetProduct);
  public static MISSING_ORDER = environment.API_SERVICE.concat(ApiPathConfig.dashboard.missingOrder);

  //INVENTORY_TRANSFER_HISTORY_REPORT
  public static INVENTORY_TRANSFER_HISTORY_REPORT = environment.API_SERVICE.concat(ApiPathConfig.report.inventoryTransferHistoryReport);

  // RECEIPT DETAILS OUTPUT REPORT
  public static RECEIPT_DETAILS_OUTPUT_REPORT = environment.API_SERVICE.concat(ApiPathConfig.report.receiptDetailsOutput);
  public static EXPORT_CSV_1100 = environment.API_SERVICE.concat(ApiPathConfig.report.exportCsv1100);

  // DELIVERY DETAIL OUTPUT REPORT
  public static DELIVERY_DETAIL_OUTPUT_REPORT = environment.API_SERVICE.concat(ApiPathConfig.report.deliveryDetailOutput);
  public static EXPORT_CSV_2240 = environment.API_SERVICE.concat(ApiPathConfig.report.exportCsv2240);

  //INVENTORY_ADJUTMENT_HISTORY_REPORT
  public static INVENTORY_ADJUTMENT_HISTORY_REPORT = environment.API_SERVICE.concat(ApiPathConfig.report.inventoryAdjutmentReport);

  // RECEIPT AND PAYMENT PRODUCT REPORT
  public static RECEIPT_AND_PAYMENT_PRODUCT_REPORT = environment.API_SERVICE.concat(ApiPathConfig.report.receiptAndPaymentProduct);

  // RECEIPT AND PAYMENT PRODUCT REPORT_DATE
  public static RECEIPT_AND_PAYMENT_PRODUCT_REPORT_DATE = environment.API_SERVICE.concat(ApiPathConfig.report.receiptAndPaymentProductDate);

  // HISTOTY PRODUCT INVENTORY CHANGE
  public static HISTOTY_PRODUCT_INVENTORY_CHANGE_PDF = environment.API_SERVICE.concat(ApiPathConfig.historyProductInventoryChange.pdf);

}

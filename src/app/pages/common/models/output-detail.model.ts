import { HttpClientResponse } from "@core/models";

export interface OutputDetail {
    inventoryOutputId: number;
    isClosed: string;
    outputStatus: string;
    orderDate: string;
    planOutputDate: string;
    planWorkingDate: string;
    planDeliverDate: string;
    actualOutputDate: string;
    actualDeliverDate: string;
    createSlipType: string;
    slipNo: string;
    planSupplierSlipNo: string;
    actualSupplierSlipNo: string;
    planCustomerDeliveryDestinationId: number;
    actualCustomerDeliveryDestinationId: number;
    planCustomerId: number;
    actualCustomerId: number;
    planRepositoryId: number;
    actualRepositoryId: number;
    checked: string;
    destinationCode: string;
    departmentName: string;
    phoneNumber: string;
    faxNumber: string;
    postCode: string;
    address1: string;
    address2: string;
    address3: string;
    address4: string;
    customerCode: string;
    customerName: string;
    routeCode: string;
    routeName: string;
    courseCode: string;
    courseName: string;
    repositoryCode: string;
    repositoryName: string;
    slipNote: string,
}

export interface HttpOutputDetailResponse extends HttpClientResponse {
    data: OutputDetail;
}
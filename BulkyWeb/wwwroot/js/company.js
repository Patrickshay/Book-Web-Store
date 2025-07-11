﻿var dataTable;
$(document).ready(function () {
    loadDataTable();
}); 

function loadDataTable() {
    dataTable = $('#tblData').DataTable({
        "ajax": { url: '/admin/company/getall'},
        "columns": [
            { data: 'name', "width" : "25%" },
            { data: 'streetAddress', "width": "15%" },
            { data: 'city', "width": "10%" },
            { data: 'state', "width": "15%" },
            {data: 'phoneNumber', "width": "10%" },
            { data: 'id', "render": function (data) {
                return `<div class="w-75 btn-group" role="group">
                            <a href="/admin/company/upsert?id=${data}" class="btn btn-primary mx-2"> 
                                <i class="bi bi-pencil-square"></i> Edit
                            </a>
                            <a onClick=Delete('/admin/company/delete/${data}') class="btn btn-danger mx-2"> 
                                <i class="bi bi-trash-fill"></i> Delete
                            </a>    
                        </div>`
                }, "width": "25%"
            }
        ]
        });
}

function Delete(url) {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: url,
                type: 'DELETE',
                success: function (data) {
                    dataTable.ajax.reload();
                    toastr.success(data.message);
                }
            });
        }
    });
}
//function Delete(url) {
//    const swalWithBootstrapButtons = Swal.mixin({
//        customClass: {
//            confirmButton: "btn btn-success",
//            cancelButton: "btn btn-danger"
//        },
//        buttonsStyling: false
//    });
//    swalWithBootstrapButtons.fire({
//        title: "Are you sure?",
//        text: "You won't be able to revert this!",
//        icon: "warning",
//        showCancelButton: true,
//        confirmButtonText: "Yes, delete it!",
//        cancelButtonText: "No, cancel!",
//        reverseButtons: true
//    }).then((result) => {
//        if (result.isConfirmed) {
//            $.ajax({
//                url: url,
//                type: 'DELETE',
//                success: function (data) {
//                    toastr.success(data.message);
//                }
//            });
//        } else if (
//            /* Read more about handling dismissals below */
//            result.dismiss === Swal.DismissReason.cancel
//        ) {
//            swalWithBootstrapButtons.fire({
//                title: "Cancelled",
//                text: "Your imaginary file is safe :)",
//                icon: "error"
//            });
//        }
//    });
//}


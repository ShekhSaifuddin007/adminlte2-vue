<template>
  <table :class="classes">
    <slot/>

    <tbody>
    </tbody>
  </table>
</template>

<script>
export default {
    name: "Datatable",

    props: {
        classes: {
            type: String,
            default: 'table table-bordered table-striped'
        },

        columns: {
            type: Array,
            required: true
        },

        remoteUrl: {
            type: String,
            required: true
        },

        method: {
            type: String,
            default: 'POST'
        },

        collapseData: {
            type: Function,
            default: () => false,
        },

        destroy: {
            type: Boolean,
            default: true
        },

        responsive: {
            type: Boolean,
            default: true
        },

        processing: {
            type: Boolean,
            default: true
        },

        serverSide: {
            type: Boolean,
            default: true
        },

        paging: {
            type: Boolean,
            default: true
        },

        lengthChange: {
            type: Boolean,
            default: true
        },

        searching: {
            type: Boolean,
            default: true
        },

        ordering: {
            type: Boolean,
            default: true
        },

        info: {
            type: Boolean,
            default: true
        },
    },

    data() {
        return {
            tableOptions: {
                destroy:        this.destroy,
                responsive:     this.responsive,
                processing:     this.processing,
                serverSide:     this.serverSide,
                paging:         this.paging,
                lengthChange:   this.lengthChange,
                searching:      this.searching,
                ordering:       this.ordering,
                info:           this.info,
                autoWidth:      false,
                width:          "100%",
                aoColumnDefs: [{ "bVisible": false, "aTargets": [0] }],
                ajax: {
                    url: this.remoteUrl,
                    type: this.method,
                    dataType: "json",
                },

                columns: this.columns,

                order: [[0, 'desc']]
            }
        }
    },

    mounted() {
        this.$nextTick(() => {
            var table = $(this.$el).DataTable(this.tableOptions)

            if (this.collapseData) {
                var _vm = this;
    
                $('tbody').on('click', 'td.details-control', function() {
                    var tr = $(this).closest('tr');
                    var row = table.row(tr);
                    if (row.child.isShown()) { // This row is already open - close it
                        row.child.hide();
                        tr.removeClass('shown');
                    } else { // Open this row
                        row.child(_vm.collapseData(row.data())).show();
                        tr.addClass('shown');
                    }
                });
            }
        })
    },
}
</script>

<style>

</style>
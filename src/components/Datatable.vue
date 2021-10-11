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
        }
    },

    data() {
        return {
            tableOptions: {
                destroy:        true,
                responsive:     true,
                processing:     true,
                serverSide:     true,
                paging:         true,
                lengthChange:   true,
                searching:      true,
                ordering:       true,
                info:           true,
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
        })
    },

    methods: {
        collapseData(data) {
	  	    return `
                <table class="table table-bordered table-hover display responsive nowrap" cellspacing="0" width="100%">
                    <tr>
                        <th>Slap Name</th>
                        <th>Unit Rate</th>
                        <th>Start Unit</th>
                        <th>End Unit</th>
                    </tr>
                    <tr>
                        <td>${data.slap_name}</td>
                        <td>${data.unit_rate}</td>
                        <td>${data.start_unit}</td>
                        <td>${data.end_unit}</td>
                    </tr>
                </table>`;
        }
    }
}
</script>

<style>

</style>
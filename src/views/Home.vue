<template>
  <AppLayout header-text="Dashboard One" title="Dashboard">
    <div class="box box-default">

			<div class="box-header with-border">
				<h3 class="box-title">Complain Details</h3>
				<div class="box-tools pull-right">
					<button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
				</div>
			</div>

			<div class="box-body">
				<div class="margin">
					<div class="btn-group">
            <a href="#" class="btn-success btn btn-sm button btn-flat pull-left" style="font-size: 12px; font-weight: bold;">
              <i class="glyphicon glyphicon-plus"></i> Create New
            </a>
					</div>
				</div>

				<div class="row">
					<div class="col-sm-12">
            <Datatable
              :columns="columns"
              remote-url="http://spcbl.test/slap_info_list-test"
              :collapse-data="collapseData"
            >
              <thead>
                <tr>
                  <tr role="row">
                    <th></th>
                    <th>#</th>
                    <th>Main Category</th>
                    <th>Category</th>
                    <th>Demand Charge</th>
                    <th>Action</th>
                </tr>
              </thead>
            </Datatable>
					</div>
				</div>

			</div>
		</div>
  </AppLayout>
</template>

<script>
import AppLayout from '@/layouts/AppLayout';
import Datatable from '@/components/Datatable';

export default {
  name: "Home",
  components: { AppLayout, Datatable },
  data() {
    return {
      columns: [
        { data: "id" },
        {
          className: 'details-control',
          orderable: false,
          data: null,
          defaultContent: ''
        },
        { data: "main_category_name" },
        { data: "category_name" },
        { data: "demand_charge" },
        { data: "Link", orderable: false, searchable: false }
      ]
    }
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
};
</script>

<style scoped>

</style>

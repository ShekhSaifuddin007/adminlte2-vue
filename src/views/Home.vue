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
              remote-url="http://127.0.0.1:8999/slap_info_list-test"
            >

            <!-- https://jsonplaceholder.typicode.com/posts -->
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

    <!-- <div class="row">
      <div style="padding: 10px 40px">
        <p v-for="(post, index) in posts" :key="index">
          {{ post.title }}
        </p>
      </div>
    </div> -->
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

  mounted() {
    axios.post('http://127.0.0.1:8999/slap_info_list-test')
      .then(({ data }) => {
        console.log(data)
      })
  }
};
</script>

<style scoped>

</style>

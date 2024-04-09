<template>
  <v-navigation-drawer color="grey-lighten-1">
    <v-card
      color="grey-lighten-4"
      elevation="0"
      flat
      tile
      :rounded="false"
    >
      <v-card-actions>
        <h3>Recipes</h3>
        <v-spacer/>
        <v-btn
          size="small"
          density="compact"
          @click="emit('update:drawer', false)"
          icon="mdi-menu"
        ></v-btn>
      </v-card-actions>
      <v-card-text>
        <v-list-item-subtitle>Admin Settings</v-list-item-subtitle>
      </v-card-text>
    </v-card>

    <v-divider></v-divider>
    
    <v-card 
      color="white" 
      flat
      tile
      class="sidebar-nav h-100 font-xs"
      rounded="false"

    >
      <v-list-item density="compact" link title="Content" to="content">
        <template v-slot:prepend>
          <v-icon size="xsmall" icon="mdi-table-of-contents"></v-icon>
        </template>
      </v-list-item>
      <v-list-item density="compact" link title="Layers" to="layers">
        <template v-slot:prepend>
          <v-icon size="xsmall" icon="mdi-layers-outline"></v-icon>
        </template>
      </v-list-item>
      <v-list-item density="compact" link title="Media" to="media">
        <template v-slot:prepend>
          <v-icon size="xsmall" icon="mdi-folder-multiple-image"></v-icon>
        </template>
      </v-list-item>
    </v-card>
  </v-navigation-drawer>
</template>

<script setup>
  const emit = defineEmits(['update:drawer']);
</script>

<style scoped>
  .sidebar-nav :deep(.v-list-item-title) {
    font-size: 0.85rem;
  }

  .sidebar-nav :deep(.v-list-item--density-compact ) {
    min-height: 28px;
  }

  .sidebar-nav :deep(.v-list-item__spacer){
    width:.6rem;
  }
</style>
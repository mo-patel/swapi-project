<template>
  <div class="popupParent">
    <div class="popupOverlay"></div>
    <div class="popupContent">
      <h2>Planet Details</h2>
      <table>
        <tbody>
          <tr>
            <th>Heading</th>
            <td>table data</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "PopupComponent",
  props: {},
};
</script>

<style scoped>
.popupParent {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: fixed;
}
.popupOverlay {
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.popupContent {
  width: 60%;
  height: 60%;
  border: 2px solid black;
  border-radius: 15px;
  background-color: #88869d;
  padding: 3%;
}

.popupContent table {
  width: 100%;
  table-layout: fixed;
  border: 2px solid black;
  border-collapse: collapse;
}
</style>

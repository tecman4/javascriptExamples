class Solution {
    public int removeElement(int[] nums, int val) {
        for(int i=0;i<nums.length;i++){
        if(nums[i]==val){
            nums[i]=0;
            }

    }
    return nums;
}
}